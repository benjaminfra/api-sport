import { logger } from "..";
import { LogLevel } from "../types";

export abstract class AbstractData {
  constructor(
    private host: string,
    private sport: string,
    private path = "games",
    private queryParameters: Record<string, string> = {
      timezone: "Europe/Paris",
    }
  ) {
    this.host = host;
    this.sport = sport;
    this.path = path;
    this.queryParameters = queryParameters;
  }

  async getData(leagueSeasons: LeagueSeason[]) {
    return (
      await Promise.all(
        leagueSeasons.map(async (leaguesSeason) => {
          return this.fetchData({ ...leaguesSeason });
        })
      )
    ).flat();
  }

  async fetchData(queryParameters: Record<string, string | number>) {
    if (!process.env.SPORT_API_KEY)
      throw new Error("SPORT_API_KEY is not defined");

    const queryParametersMerge = {
      ...queryParameters,
      ...this.queryParameters,
    };
    const queryString = Object.keys(queryParametersMerge)
      .map((key) => `${key}=${queryParametersMerge[key]}`)
      .join("&");

    logger(
      LogLevel.DEBUG,
      `fetching https://${this.host}/${this.path}?${queryString}`
    );
    return await fetch(`https://${this.host}/${this.path}?${queryString}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": this.host,
        "x-rapidapi-key": process.env.SPORT_API_KEY,
      } as HeadersInit,
    })
      .then((response) => {
        return response.json();
      })
      .then((r) => {
        if (r.errors.length !== 0) logger(LogLevel.ERROR, r.errors.requests);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return r.response.map((m: any) => {
          return {
            ...m,
            sport: this.sport,
          };
        });
      });
  }
}

export interface LeagueSeason {
  league: number;
  season: number;
}

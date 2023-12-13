import { AbstractSport } from "./abstract-sport";

export class Football extends AbstractSport {
  constructor() {
    super("v3.football.api-sports.io", "football", "fixtures", {
      timezone: "Europe/Paris",
    });
  }
}

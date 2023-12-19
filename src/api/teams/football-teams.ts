import { AbstractData } from "../AbstractData";

export class FootballTeams extends AbstractData {
  constructor() {
    super("v3.football.api-sports.io", "football", "teams", {});
  }
}

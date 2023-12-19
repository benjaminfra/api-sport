import { AbstractData } from "../AbstractData";

export class Football extends AbstractData {
  constructor() {
    super("v3.football.api-sports.io", "football", "fixtures", {
      timezone: "Europe/Paris",
    });
  }
}

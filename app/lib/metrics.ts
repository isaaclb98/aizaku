import client, { Counter } from "prom-client";

export const register = client.register;

export const siteVisits: Counter<string> =
  (client.register.getSingleMetric("site_visits_total") as Counter<string>) ||
  new client.Counter({
    name: "site_visits_total",
    help: "Total number of site page visits",
  });

import { postgres } from "../deps.js";

let sql;
if (Deno.env.get("FLYWAY_URL")) {
  sql = postgres(Deno.env.get("FLYWAY_URL"));
} else {
  sql = postgres({});
}

export { sql };
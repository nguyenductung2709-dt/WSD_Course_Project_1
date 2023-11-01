import { postgres } from "../deps.js";

const sql = postgres({
  host: Deno.env.get("PGHOST"), // Use the environment variable PGHOST
  database: Deno.env.get("PGDATABASE"), // Use the environment variable PGDATABASE
  username: Deno.env.get("PGUSER"), // Use the environment variable PGUSER
  password: Deno.env.get("PGPASSWORD"), // Use the environment variable PGPASSWORD
  port: 5432,
  max: 2, // use at most 2 concurrent connections
});

export { sql };

import { postgres } from "../deps.js";

const sql = postgres({
  host: Deno.env.get("PGHOST"), 
  database: Deno.env.get("PGDATABASE"), 
  username: Deno.env.get("PGUSER"), 
  password: Deno.env.get("PGPASSWORD"), 
  port: 5432,
  max: 2, 
});

export { sql };

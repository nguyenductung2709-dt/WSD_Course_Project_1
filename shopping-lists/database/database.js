import { postgres } from "../deps.js";

let sql;
if (Deno.env.get("database-p1-4f39a9d5-9b37-4b13-b7d4-5693677e9d48L")) {
  sql = postgres(Deno.env.get("database-p1-4f39a9d5-9b37-4b13-b7d4-5693677e9d48"));
} else {
  sql = postgres({});
}


export { sql };
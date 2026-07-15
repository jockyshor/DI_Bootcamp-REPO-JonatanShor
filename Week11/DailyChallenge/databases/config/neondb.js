import { Pool } from "pg";
import { config } from "dotenv";

config()

console.log(process.env);

const {PGHOST, PGDATABASE,PGPASSWORD,PGPORT, PGUSER} = process.env


 export const pool = new Pool({
  host: PGHOST,
  port: PGPORT,
  user: PGUSER,
  database: PGDATABASE,
  password: PGPASSWORD,
  ssl: { rejectUnauthorized: false },
});



import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-serverless";
import { InferModel, eq } from "drizzle-orm";
import { Client } from "@neondatabase/serverless";

import { users } from "./schema";

config({ path: ".dev.vars" });

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

const client = new Client(process.env.DATABASE_URL);

export const db = drizzle(client);

export type User = InferModel<typeof users>;

export const fromID = (id: number) =>
  db.transaction(async (tx) => {
    return await tx
      .select()
      .from(users)
      .where(eq(users.id, id))
      .execute()
      .then((rows) => rows[0]);
  });

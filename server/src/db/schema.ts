import {
  char,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

export const users = pgTable(
  "users",
  {
    id: serial("id"),
    fullName: text("full_name"),
    email: varchar("email", { length: 255 }),
    hashedPassword: char("password", { length: 60 }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (user) => ({
    id: primaryKey(user.id),
    email: uniqueIndex("email").on(user.email),
  })
);

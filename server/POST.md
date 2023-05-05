first define postgreSQL table users

```typescript
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
```

then define the graphql schema

```typescript
export const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.string("fullName");
    t.nonNull.string("email");
    t.nonNull.string("hashedPassword");
    t.nonNull.field("createdAt", { type: "DateTime" });
  },
});
```

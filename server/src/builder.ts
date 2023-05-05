import SchemaBuilder from "@pothos/core";
import { User, fromID } from "./db/drizzle";

export const builder = new SchemaBuilder({});

import "./types/user";

builder.queryType({
  fields: (t) => ({
    hello: t.string({
      args: {
        name: t.arg.string(),
      },
      resolve: (parent, { name }) => `hello, ${name || "World"}`,
    }),
  }),
});

export const schema = builder.toSchema();

import { InferResolvers, buildSchema, g } from "garph";
import { createYoga } from "graphql-yoga";
import { schema } from "./builder";

const yoga = createYoga({
  graphqlEndpoint: "/",
  schema,
});

self.addEventListener("fetch", yoga);

import { InferResolvers, buildSchema, g } from "garph";
import { createYoga } from "graphql-yoga";

const money = g.type("Money", {
  amount: g.float(),
  formatted: g.string(),
});

const cartItem = g.type("CartItem", {
  id: g.id(),
  name: g.string(),
});

const cart = g.type("Cart", {
  id: g.id(),
  items: g.ref(cartItem).list(),
  totalItems: g.int(),
  subtotal: g.ref(money),
});

const query = g.type("Query", {
  cart: g.ref(cart).args({ id: g.id() }).description("Get a cart by id"),
});

const resolvers: InferResolvers<{ Query: typeof query }, {}> = {
  Query: {
    cart: (_, args) => ({
      id: args.id,
      items: [
        {
          id: "1",
          name: "Item 1",
        },
        {
          id: "2",
          name: "Item 2",
        },
      ],
      totalItems: 2,
      subtotal: {
        amount: 100,
        formatted: "$100",
      },
    }),
  },
};

const schema = buildSchema({
  g,
  resolvers,
});

const yoga = createYoga({
  graphqlEndpoint: "/",
  schema,
});

self.addEventListener("fetch", yoga);

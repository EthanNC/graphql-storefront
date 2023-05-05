import { builder } from "../builder";
import { User, fromID } from "../db/drizzle";

const UserType = builder.objectRef<User>("User").implement({
  fields: (t) => ({
    id: t.exposeInt("id"),
    email: t.exposeString("email", { nullable: true }),
    name: t.exposeString("fullName", { nullable: true }),
    createdAt: t.string({
      resolve: (user) => user.createdAt.toISOString(),
    }),
  }),
});

builder.queryType({
  fields: (t) => ({
    user: t.field({
      type: UserType,
      args: {
        id: t.arg.int(),
      },
      resolve: async (_, args) => await fromID(args.id as number),
    }),
  }),
});

// builder.mutationType({
//   fields: (t) => ({
//     createUser: t.field({
//       type: String,
//       resolve: (_, args) => {
//         return "Hello Mutation";
//       },
//     }),
//   }),
// });

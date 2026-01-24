// import { mutation } from "./_generated/server";
// import { query } from "./_generated/server";
// export const store = mutation({
//   args: {},
//   handler: async (ctx) => {
//     const identity = await ctx.auth.getUserIdentity();
//     if (!identity) {
//       throw new Error("Called storeUser without authentication present");
//     }

//     // Check if we've already stored this identity before.
//     // Note: If you don't want to define an index right away, you can use
//     // ctx.db.query("users")
//     //  .filter(q => q.eq(q.field("tokenIdentifier"), identity.tokenIdentifier))
//     //  .unique();
//     const user = await ctx.db
//       .query("users")
//       .withIndex("by_token", (q) =>
//         q.eq("tokenIdentifier", identity.tokenIdentifier),
//       )
//       .unique();
//     if (user !== null) {
//       // If we've seen this identity before but the name has changed, patch the value.
//       if (user.name !== identity.name) {
//         await ctx.db.patch(user._id, { name: identity.name });
//       }
//       return user._id;
//     }
//     // If it's a new identity, create a new `User`.
//     return await ctx.db.insert("users", {
//       name: identity.name ?? "Anonymous",
//       tokenIdentifier: identity.tokenIdentifier,
//       email: identity.email ?? "",
//       imageUrl: identity.pictureUrl ?? "",
//       hasCompletedOnboarding: false,
//       freeEventsCreated: 0,
//     });
//   },
// });
// export const getCurrentUser = query({
//   args: {},
//   handler: async (ctx) => {
//     const identity = await ctx.auth.getUserIdentity();
//     if (!identity) {
//     //   throw new Error("Called getCurrentUser without authentication present");
//     return null;
//     }
//     const user = await ctx.db
//       .query("users")
//       .withIndex("by_token", (q) =>
//         q.eq("tokenIdentifier", identity.tokenIdentifier),
//       )
//       .unique();
//     return user;
//   },
// });


import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const store = mutation({
  args: {
    tokenIdentifier: v.string(),
    name: v.string(),
    email: v.string(),
    imageUrl: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", args.tokenIdentifier)
      )
      .unique();

    if (existing) {
      return existing._id;
    }

    return await ctx.db.insert("users", {
      tokenIdentifier: args.tokenIdentifier,
      name: args.name,
      email: args.email,
      imageUrl: args.imageUrl,
      hasCompletedOnboarding: false,
      freeEventsCreated: 0,
    });
  },
});

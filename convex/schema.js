import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
export default defineSchema({
    //users tabkle
    users: defineTable({
        name: v.string(),
        tokenIdentifier: v.string(), //clerk suer id for clerk auth
        email: v.string(),
        imageUrl: v.optional(v.string()),

        //onboarding
        hasCompletedOnboarding: v.boolean(),
        location: v.optional(
            v.object({
                city: v.string(),
                state: v.string(),
                country: v.string(),
            })
        ),
        interests: v.optional(
            v.array(v.string())
        ),
        freeEventsCreated: v.number(), // track free events created 1 free 
        //timestamps
        // createdAt: v.timestamp(),
        // updatedAt: v.timestamp(),


    }).index("by_token", ["tokenIdentifier"])

})
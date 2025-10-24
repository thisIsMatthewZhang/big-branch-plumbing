import { defineCollection, z } from "astro:content";
import { date } from "astro:schema";

const blogCollection = defineCollection({
        schema: ({ image }) => z.object({
            pubDate: date(),
            cover: image(),
            coverAlt: z.string(),
    })
});

export const collections = {
    blogs: blogCollection
};
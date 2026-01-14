import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
    loader: glob({pattern: '*.md', base: './src/content/blogs'}),
    schema: ({ image }) => z.object({
        // layout: z.string(),
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        author: z.string(),
        cover: image(),
        coverAlt: z.string(),
    })
});

const serviceCollection = defineCollection({
    loader: glob({ pattern: '*.md', base: './src/content/services' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
    })
});

export const collections = {
    blogs: blogCollection,
    services: serviceCollection,
};


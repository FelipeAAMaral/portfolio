
import { defineCollection, z } from 'astro:content';

// Define the blog collection schema
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    image: z.string().optional(),
    author: z.string().default('Felipe Amaral'),
  }),
});

// Export the collections
export const collections = {
  'blog': blogCollection,
};

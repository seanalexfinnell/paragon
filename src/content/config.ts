import { defineCollection, z } from "astro:content";

const pages = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		slug: z.string().optional(),
		variant: z.enum(["bullets", "toc", "simple"]).default("simple"),
		hero: z
			.object({
				src: z.string().optional(),
				alt: z.string().optional(),
				layout: z.enum(["thumbnail", "full"]).default("thumbnail"),
			})
			.optional(),
		bullets: z.array(z.string()).optional(),
		sources: z
			.array(
				z.object({
					label: z.string(),
					url: z.string().url().optional(),
				})
			)
			.optional(),
	}),
});

const caseStudies = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		slug: z.string().optional(),
	}),
});

export const collections = { pages, "case-studies": caseStudies };

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import sitemap from "vite-plugin-sitemap";
import pageMeta, { sitemapRoutes } from "./tools/page-meta";
import { siteUrl } from "./src/data/pages";

export default defineConfig({
	base: "/",
	plugins: [
		solidPlugin(),
		tailwindcss(),
		pageMeta(),
		sitemap({
			hostname: siteUrl,
			dynamicRoutes: sitemapRoutes,
		}),
	],
	server: {
		port: 3000,
	},
	build: {
		target: "esnext",
	},
});

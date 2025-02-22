// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeObsidian from 'starlight-theme-obsidian'
import robotsTxt from 'astro-robots-txt';
import compressor from 'astro-compressor';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.mcds.moe',
	prefetch: {
		defaultStrategy: 'load',
		prefetchAll: true,
	},
	integrations: [
		starlight({
			title: 'MCDS Wiki',
			defaultLocale: 'en',
			locales: {
				en: {
					label: 'English',
					lang: 'en',
				},
				de: {
					label: 'Deutsch',
					lang: 'de',
				},
			},
			social: {
				github: 'https://github.com/Minecodes',
				mastodon: 'https://sueden.social/@Minecodes',
				blueSky: 'https://bsky.app/profile/mcds.moe',
				codeberg: 'https://codeberg.org/Minecodes',
				youtube: 'https://youtube.com/@Minecodes',
			},
			sidebar: [
				{
					label: 'Documentation',
					autogenerate: { directory: 'docs' },
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				}
			],
			plugins: [
				starlightThemeObsidian({
					backlinks: true,
					graph: false
				}),
			],
			credits: true,
		}),
		robotsTxt({
			sitemap: true,
			policy: [
				{
					userAgent: '*',
					allow: '/',
					disallow: '/_astro/'
				},
				{
					userAgent: 'GPTBot',
					disallow: '/',
				},
				{
					userAgent: 'ChatGPT-User',
					disallow: '/',
				},
				{
					userAgent: 'Google-Extended',
					disallow: '/',
				},
				{
					userAgent: 'CCBot',
					disallow: '/',
				},
				{
					userAgent: 'anthropic-ai',
					disallow: '/',
				}
			],
		}),
		compressor({
			brotli: true,
			gzip: true,
		})
	],
});

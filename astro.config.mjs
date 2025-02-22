// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeObsidian from 'starlight-theme-obsidian'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'MCDS Wiki',
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
			]
		}),
	],
});

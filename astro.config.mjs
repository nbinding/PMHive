// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const categories = [
	'Reading-Material',
	'Learning-Resources',
	'Practical-Tools-and-Templates',
	'Media',
	'Networking-and-Community',
	'Events',
	'Communication-and-Interaction',
	'Expert-Insights',
	'Job-and-Career-Development',
	'Miscellaneous',
];

// https://astro.build/config
export default defineConfig({
	site: 'https://nbinding.github.io',
	base: '/PMHive',
	integrations: [
		starlight({
			title: 'PMHive',
			description: 'A comprehensive hub for product management resources.',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/nbinding/PMHive' }],
			editLink: {
				baseUrl: 'https://github.com/nbinding/PMHive/edit/main/',
			},
			customCss: ['./src/styles/custom.css'],
			sidebar: categories.map((directory) => ({
				label: directory.replace(/-/g, ' '),
				items: [{ autogenerate: { directory } }],
			})),
		}),
	],
});

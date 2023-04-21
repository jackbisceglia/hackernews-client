/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				navbar: 'rgba(17, 8, 31, 0.3)',
				coolmint: {
					200: '#E5EEEB',
					300: '#C7CECC',
					400: '#5F7D76',
					500: '#88EFE0',
					// 600: '#1BA894',
					600: '#1DB39E',
					// 600: '#1DC6AE',
					700: '#131818',
					800: '#0B0D0D'
				}
			}
		}
	},
	plugins: []
};

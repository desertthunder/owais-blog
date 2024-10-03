/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				headings: "'Josefin Sans', sans-serif",
				sans: "Lato, sans-serif",
				serif: "'Source Serif Pro 4', serif"
			},
			colors: {
				goldenrod: {
					50: '#fffaeb',
					100: '#fdf0c8',
					200: '#fadf8d',
					300: '#f9d16a', // Main Shade
					400: '#f6b429',
					500: '#f09310',
					600: '#d46e0b',
					700: '#b04d0d',
					800: '#8f3b11',
					900: '#763111',
					950: '#431705'
				},
				calypso: {
					50: '#f0fbfb',
					100: '#d9f2f4',
					200: '#b7e5ea',
					300: '#85d0db',
					400: '#4cb3c4',
					500: '#3097aa',
					600: '#2b7b8f',
					700: '#2a687a', // Main Shade
					800: '#295361',
					900: '#264753',
					950: '#142e38'
				},
				asparagus: {
					50: '#f5f9f4',
					100: '#eaf2e6',
					200: '#d5e4ce',
					300: '#b3cea7',
					400: '#89b078',
					500: '#72a25e', // Main Shade
					600: '#527742',
					700: '#425f36',
					800: '#374c2f',
					900: '#2e3f28',
					950: '#162112'
				},
				dune: {
					50: '#f4f3f2',
					100: '#e3e1de',
					200: '#cac2be',
					300: '#ab9f99',
					400: '#93837c',
					500: '#84756e',
					600: '#71615d',
					700: '#5c4d4c',
					800: '#4f4544',
					900: '#3c3434', // Main Shade
					950: '#272121'
				},
				loblolly: {
					50: '#f5f7f9',
					100: '#e9edf0',
					200: '#d8dfe5',
					300: '#c1ccd5', // Main Shade
					400: '#9eadbc',
					500: '#8697ab',
					600: '#74849c',
					700: '#68758d',
					800: '#586175',
					900: '#49515f',
					950: '#2f333c'
				},
				'outer-space': {
					50: '#f3f7f8',
					100: '#e1ebec',
					200: '#c6d9db',
					300: '#9fbec1',
					400: '#709ba0',
					500: '#557f85',
					600: '#496a71',
					700: '#40595e',
					800: '#3a4b50',
					900: '#334146',
					950: '#212c30' // Main Shade
				}
			}
		}
	},
	plugins: []
};

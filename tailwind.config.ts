import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				blue: {
					"50": "#f2f9fd",
					"100": "#ecf6fc",
					"200": "#d7edf9",
					"300": "#7fc4ed",
					"400": "#72b0d5",
					"500": "#669dbe",
					"600": "#5f93b2",
					"700": "#4c768e",
					"800": "#39586b",
					"900": "#2c4553",
				},

				gray: {
					100: "#FBF9FE",
					200: "#322F40",
					300: "#282533",
					400: "#1D1B26",
					500: "#0F0E13",
				},
			},
		},
	},
	plugins: [],
};
export default config;

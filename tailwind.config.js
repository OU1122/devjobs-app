/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./src/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
		colors: {
			Violet: "#5964E0",
			LightViolet: "#939BF4",
			VeryDarkBlue: "#19202D",
			Midnight: "#121721",
			White: "#FFFFFF",
			LightGray: "#F4F6F8",
			Gray: "#9DAEC2",
			DarkGray: "#6E8098",
		},
	},
	plugins: [],
	darkMode: "class",
};

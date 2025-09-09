import type { Config } from "tailwindcss";

const config: Config = {
	theme: {
		extend: {
			screen: {
				xl: { max: "1440px" },
				lg: { max: "1150px" },
				md: { max: "767px" },
				sm: { max: "639px" },
			},
		},
	},
};

export default config;

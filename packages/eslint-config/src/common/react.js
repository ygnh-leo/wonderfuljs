module.exports = {
	plugins: ["react", "react-hooks"],
	extends: [
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:react/jsx-runtime",
	],
	env: {
		browser: true,
		es6: true,
	},
	rules: {
		"react/prop-types": "off", // We use TypeScript
	},
	parserOptions: {
		ecmaFeatures: {
			ecmaVersion: "esnext",
			jsx: true,
		},
	},
	settings: {
		react: {
			version: "detect",
		},
	},
}

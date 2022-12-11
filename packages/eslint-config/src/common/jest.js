module.exports = {
	overrides: [
		{
			files: ["**/*.test.{js,jsx,ts,tsx}", "**/__tests__/**/*.{js,jsx,ts,tsx}"],
			plugins: ["jest"],
			env: {
				"jest/globals": true,
			},
			extends: ["plugin:jest/recommended", "plugin:jest/style"],
			rules: {
				// TODO: enable?
			},
		},
	],
}

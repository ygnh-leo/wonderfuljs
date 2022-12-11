/** @type { import('@types/eslint').ESLint.ConfigData } */
module.exports = {
	extends: [
		"eslint:recommended",
		...["./prettier.js", "./import.js"].map((i) => require.resolve(i)),
	],
	rules: {
		...require("../roles/style"),
	},
}

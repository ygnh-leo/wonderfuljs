/** @type { import('@types/eslint').ESLint.ConfigData } */
module.exports = {
	env: {
		es6: true,
		node: true,
	},
	parser: "@typescript-eslint/parser",
	extends: ["./src/common/index.js"].map((i) => require.resolve(i)),
}

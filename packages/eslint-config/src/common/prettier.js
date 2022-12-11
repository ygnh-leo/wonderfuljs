/** @type { import('@types/eslint').ESLint.ConfigData } */
module.exports = {
	extends: ["prettier", "plugin:prettier/recommended"],
	plugins: ["prettier"],
	rules: {
		"prettier/prettier": 2,
	},
}

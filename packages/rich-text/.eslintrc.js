/** @type { import("@types/eslint").ESLint.ConfigData } */
module.exports = {
	env: {
		es6: true,
		node: true,
	},
	extends: [
		"@wonderfuljs/eslint-config/recommended",
		"@wonderfuljs/eslint-config/react",
		"@wonderfuljs/eslint-config/typescript",
		"@wonderfuljs/eslint-config/jest",
	],
	rules: {
		// 代码格式问题由 prettier 处理，并且 prettier 会自动修复，如果报错的话会影响编写体验
		"prettier/prettier": "off",
	},
}

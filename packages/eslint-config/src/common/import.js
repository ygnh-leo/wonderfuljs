/** @type { import('@types/eslint').ESLint.ConfigData } */
module.exports = {
	plugins: ["import"],
	env: {
		es6: true,
	},
	extends: ["plugin:import/recommended"],
	rules: {
		// 对于很多使用 Node 或者 Webpack 的项目，这个规则会导致很多问题，所以关闭
		"import/no-unresolved": 0,
	},
}

module.exports = {
	overrides: [
		{
			plugins: ["@typescript-eslint"],
			files: ["**/*.ts?(x)"],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				sourceType: "module",
				ecmaFeatures: {
					jsx: true,
				},
				warnOnUnsupportedTypeScriptVersion: true,
			},
			extends: ["plugin:@typescript-eslint/recommended"],
			rules: {
				// 允许使用非空断言
				"@typescript-eslint/no-non-null-assertion": 0,

				// 允许使用 any todo: 目前禁止 any 太过严格
				"@typescript-eslint/no-explicit-any": 0,
			},
		},
	],
	settings: {
		"import/parsers": {
			[require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
		},
		"import/resolver": {
			[require.resolve("eslint-import-resolver-node")]: {
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
			[require.resolve("eslint-import-resolver-typescript")]: {
				alwaysTryTypes: true,
			},
		},
	},
}

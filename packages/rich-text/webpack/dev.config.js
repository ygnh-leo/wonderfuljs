const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

/** @type {import("webpack").Configuration} */
module.exports = {
	entry: "dev/index.tsx",
	mode: "development",
	plugins: [
		new HtmlWebpackPlugin({
			title: "Rich Text",
			template: "dev/index.html",
		}),
	],
	resolve: {
		plugins: [new TsconfigPathsPlugin()],
		extensions: [".ts", ".tsx", ".js", ".jsx", ".css"],
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /(node_modules)/,
				use: {
					loader: "swc-loader",
					options: {
						jsc: {
							parser: {
								syntax: "typescript",
								tsx: true,
							},
							transform: {
								react: {
									runtime: "automatic",
								},
							},
						},
					},
				},
			},
		],
	},
	devServer: {
		port: 3000,
		hot: true,
	},
}

/** prepare.js
 *
 * 在 npm install 完成之后会自动执行该脚本
 * */

const IS_CI = process.env.CI !== undefined
const IS_DOCKER = process.env.DOCKER !== undefined
const IS_PROD = process.env.NODE_ENV === "production"
const IS_NPM_PROD = process.env.npm_config_production === "true"

// install husky if not in CI, Docker, production, or npm install --production
if (![IS_CI, IS_DOCKER, IS_PROD, IS_NPM_PROD].some(Boolean)) {
	require("husky").install()
	console.log("🐶 Husky installed")
} else {
	console.log("🐶 Husky skipped")
}

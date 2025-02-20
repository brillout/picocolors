import fs from 'fs/promises'
const distCjs = 'dist/cjs'
const addCJSDefaultExport = './dist/cjs/picocolors.js'

main()

async function main() {
  await generatePackageJson()
  await enableCJSDefaultExport(addCJSDefaultExport)
}

async function generatePackageJson() {
  await fs.writeFile(distCjs + '/package.json', '{ "type": "commonjs" }\n', 'utf8')
  console.log(`✅ ${distCjs}/package.json generated`)
}

// CJS default export `const mod = require('some-package')`
//  - It needs to live at the end of this file, in order to ensure we do it after all assignments to `exports`.
async function enableCJSDefaultExport(filePath) {
  const fileContent = await fs.readFile(filePath, 'utf8')
  const fileContentMod = fileContent + '\ntry { module.exports = Object.assign(exports.default, exports) } catch {}\n'
  await fs.writeFile(filePath, fileContentMod, 'utf8')
  console.log(`✅ ${filePath} enabled CJS default export`)
}

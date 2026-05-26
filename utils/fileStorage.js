const fs = require('fs').promises

const readJsonFile = async (filePath) => {
  const data = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(data)
}

const writeJsonFile = async (filePath, data) => {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2))
}

module.exports = {
  readJsonFile,
  writeJsonFile
}
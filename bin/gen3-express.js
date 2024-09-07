#!/usr/bin/env node

const path = require('path')
const fse = require('fs-extra')
const { program } = require('commander')

const templatePath = path.resolve(__dirname, '../template')

// function to copy template files.
const createApp = async (appName) => {
  const destPath = path.resolve(process.cwd(), appName)
  try {
    await fse.copy(templatePath, destPath)
    console.log(`[+] Express app has been created at ${destPath}...`)
  } catch (error) {
    console.error(`[-] ${error.message}`)
  }
}

program
  .version('1.0.0')
  .argument('<app-name>', 'Name of the application')
  .action(async (appName) => {
    // check if folder already exist.
    if (fse.existsSync(appName)) {
      console.error('[-] Express is app already exist...')
      return
    }
    await createApp(appName)
  })

program.parse(process.argv)

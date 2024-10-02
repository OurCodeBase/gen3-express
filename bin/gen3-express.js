#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const fse = require('fs-extra')
const signale = require('signale')
const { program } = require('commander')

// path of template.
let template = path.resolve(__dirname, '../template')

// change package name of a node package.
// @param {string} name - new name of node package.
// @param {string} path - path of package file node package.
const change_package = (name, path) => {
  try {
    const package_data = require(path)
    package_data.name = name
    fs.writeFileSync(path, JSON.stringify(package_data, null, 2))
  } catch (error) {
    signale.error(new Error('Apologize for failed to write package file.'));
  }
}

// function to copy template files.
async function create_app(app_name) {
  const destination = path.resolve(process.cwd(), app_name)
  try {
    await fse.copy(template, destination)
    signale.success(`Copying template files to ${app_name} is successful.`)
    change_package(app_name, `${destination}/package.json`)
    signale.success(`Resolving name of package is successful.`)
  } catch (error) {
    signale.error(error)
  }
}

// set arguments and actions to create app.
program
  .version('1.0.0')
  .argument('<app-name>', 'name to create new app.')
  .option('-t, --tailwindcss', 'To add tailwindcss files.')
  .action(async (app_name, options) => {
    signale.time()
    if (options.tailwindcss) {
      signale.info('You have selected tailwind boilerplate.')
      template = path.resolve(__dirname, '../tailwind')
    }
    // check if folder already exist.
    if (!fse.existsSync(app_name)) {
      signale.await(`${app_name} app is on the way.`)
      await create_app(app_name)
      signale.complete(`A new app has been created as ${app_name}.`)
    } else {
      signale.error(`${app_name} app does exist in same folder.`)
    }
    signale.timeEnd()
  })

// exection of process.
program.parse(process.argv)

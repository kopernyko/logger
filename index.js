import chalk from 'chalk'
import fs from 'node:fs'

function getDate() {
  return new Date().toLocaleString('es-ES')
}

function logMessage(msg) {
  if (!fs.existsSync('./tmp/diagnostic.txt')) {
    fs.mkdirSync('tmp')
  }
  fs.appendFileSync('./tmp/diagnostic.txt', `${msg}\n`)
}

export function info(msg) {
  const formattedMessage = chalk.green(`[${getDate()}] [INFO] ${msg}`)
  logMessage(formattedMessage)
  console.log(formattedMessage)
}

export function warn(msg) {
  const formattedMessage = chalk.yellow(`[${getDate()}] [WARN] ${msg}`)
  console.log(formattedMessage)
  logMessage(formattedMessage)
  console.log(formattedMessage)
}

export function error(msg) {
  const formattedMessage = chalk.red(`[${getDate()}] [ERROR] ${msg}`)
  logMessage(formattedMessage)
  console.log(formattedMessage)
}

export function debug(msg) {
  const formattedMessage = chalk.blue(`[${getDate()}] [DEBUG] ${msg}`)
  logMessage(formattedMessage)
  console.log(formattedMessage)
}

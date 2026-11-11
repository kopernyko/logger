import chalk from 'chalk'

function getDate() {
  return new Date().toLocaleString('es-ES')
}

export function info(msg) {
  console.log(chalk.green(`[${getDate()}] [INFO] ${msg}`))
}

export function warn(msg) {
  console.log(chalk.yellow(`[${getDate()}] [WARN] ${msg}`))
}

export function error(msg) {
  console.log(chalk.red(`[${getDate()}] [ERROR] ${msg}`))
}

export function debug(msg) {
  console.log(chalk.blue(`[${getDate()}] [DEBUG] ${msg}`))
}

function getDate() {
  return new Date().toLocaleString('es-ES')
}

export function info(msg) {
  console.log(`[${getDate()}] [INFO] ${msg}`)
}

export function warn(msg) {
  console.log(`[${getDate()}] [WARN] ${msg}`)
}

export function error(msg) {
  console.log(`[${getDate()}] [ERROR] ${msg}`)
}

export function debug(msg) {
  console.log(`[${getDate()}] [DEBUG] ${msg}`)
}

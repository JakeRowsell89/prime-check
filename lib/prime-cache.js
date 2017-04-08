const cache = {}

function get (number) {
  return cache[number]
}

function set (number, boolean) {
  cache[number] = boolean
}

module.exports = {
  get,
  set
}

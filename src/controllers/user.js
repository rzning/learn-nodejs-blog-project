function login ({ username, password }) {
  if (username === 'rzning' && password === 'abc') {
    return true
  }
  return false
}

module.exports = {
  login
}

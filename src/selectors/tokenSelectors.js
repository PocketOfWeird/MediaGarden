export const isLoggedIn = state => {
  if (!state.token) return false
  return true
}

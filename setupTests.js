/* eslint-disable no-console */

// Make console.error a real failure
console.error = (message) => {
  throw new Error(message)
}

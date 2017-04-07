function isPrime (number) {
  let isPrime = Math.floor(number) === number
  if (number < 2) {
    isPrime = false
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false
    }
  }

  return isPrime
}

module.exports = isPrime

function isPrime (number) {
  let isPrime = number > 1 && Math.floor(number) === number

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false
      break
    }
  }

  return isPrime
}

module.exports = isPrime

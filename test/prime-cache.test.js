const primeCache = require('../lib/prime-cache')
// const isPrime = require('../lib/calculate-if-prime')

test('Prime cache is an object', () => {
  expect(typeof primeCache).toEqual('object')
})

// check if prime
// set prime
// set not prime

test('Prime cache allows to get a prime number', () => {
  expect(typeof primeCache.get).toEqual('function')
})

test('Prime cache allows to get a prime number', () => {
  expect(typeof primeCache.set).toEqual('function')
})

test('Setting a prime and getting a prime should return true', () => {
  expect(primeCache.get(1011)).toEqual(false)
// primeCache.set(1011)
// expect.
})
// test('getLargestPrime returns a prime number', () => {
//   const largestPrime = primeCache.getLargestPrime()
//   expect(isPrime(largestPrime)).toEqual(true)
// })

// test('Prime number 2 returns true', () => {
//   expect(primeCache.get(2)).toEqual(true)
// })

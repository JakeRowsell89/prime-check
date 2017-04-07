const primeCache = require('../lib/prime-cache')
const isPrime = require('../lib/calculate-if-prime')

test('Prime cache is an object', () => {
  expect(typeof primeCache).toEqual('object')
})
// get largest prime
// check if prime
// set prime
// set not prime

test('Prime cache allows to get largest prime', () => {
  expect(typeof primeCache.getLargestPrime).toEqual('function')
})

test('getLargestPrime returns a prime number', () => {
  const largestPrime = primeCache.getLargestPrime()
  expect(isPrime(largestPrime)).toEqual(true)
})

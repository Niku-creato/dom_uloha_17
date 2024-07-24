const array2 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

for (let i = 0; i < array2.length; i++) {
  if (isPrime(array2[i])) {
    console.log(array2[i]);
  }
}

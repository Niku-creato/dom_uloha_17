function countVowels(str, vowelsArray) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowelsArray.includes(str[i].toLowerCase())) {
        count++;
      }
    }
    return count;
  }
  
  const vowelsArray = ['a', 'e', 'i', 'o', 'u', 'y'];
  console.log(countVowels('hello to you', vowelsArray)); // 6
  console.log(countVowels('lorem ipsum dolor sit amet', vowelsArray)); // 9
  
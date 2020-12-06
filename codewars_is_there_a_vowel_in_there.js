/*
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.
*/

const isVow = (a) => {
  let vowels = 'aeiou';
  let index = 0;
  while(index < a.length) {
    for(let i = 0; i < vowels.length; i++) {
      if(a[index] === vowels.charCodeAt(i)) {
        a[index] = vowels[i];
      }
    }
    index++;
  }

  return a;
}
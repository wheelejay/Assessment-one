// Return the quotient of x and y.
// Ex.:
//   divide(10, 2);
//   => 5
function divide(x, y) {
  return x / y;
}

// Return the average of x and y.
// Here, the average of x and y is the *mean* of x and y. In other words, it's
// computed by dividing the sum of x and y by 2.
// Ex.:
//   average(10, 2);
//   => 6
function average(x, y) {
  let sum = x + y;
  return sum / 2; 
}

// Return true if x and y are mostly equivalent up to a tolerance of 0.001.
// In other words, return true if the aboslute value of x - y is less than 0.001.
// Ex.:
//   approximatelyEqual(10.001, 10);
//   => true
function approximatelyEqual(x, y) {
  if (x - y <= 0.001)
  return true
}

// Given a first name and last name, return a full name in the format "FIRST LAST"
// Ex.:
//   fullName('John', 'Doe');
//   => 'John Doe'
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

// Generate the sentence "PERSON was drinking BEVERAGE at LOCATION" using the
// person, beverage and location provided.
// Ex.:
//   generateSentence('Kay', 'coffee', 'the local cafe');
//   => 'Kay was drinking coffee at the local cafe.'
function generateSentence(person, beverage, location) {
  return person + " was drinking " + beverage + " at " + location;
}

// Return the given string with all vowels replced with '*' characters.
// Ex.:
//   censorVowels('javascript');
//   => 'j*v*scr*pt'
function censorVowels(string){
  return string.replace(/[aeiou]+/gi, "*");
}

// Return the given string in sticky case.
// Ex.:
//   stickyCase('hello world');
//   => 'hElLo wOrLd'
function stickyCase(string) {
  let arr = string.toLowerCase();
  for (let i = 1; i < arr.length; i += 2) {
      arr[i] = arr[i].toUpperCase();
  }
  return arr.push(i);
}

// Return the given string in leetspeak. Leetspeak is a modified version of
// English where characters are replaced by numbers or symbols. For this
// version of leetspeak, replace the following characters:
//   a => 4
//   e => 3
//   i => 1
//   o => 0
//   s => 5
//   t => 7
// Ex.:
//   leetspeak('javascript');
//   => 'j4v45cr1p7'
function leetspeak(string) {
  let arr = string.toLowerCase();
  for (let i = 1; i < arr.length; i ++) {
     if (arr[i] = "a"){
      return arr.replace(/a/gi, "4")}
    else if(arr[i] = "e"){
      return arr.replace(/e/gi, "3")}
    else if(arr[i] = "i"){
      return arr.replace(/i/gi, "1")}
    else if(arr[i] = "o"){
      return arr.replace(/o/gi, "0")}
    else if(arr[i] = "s"){
     return arr.replace(/s/gi, "5")}
    else if(arr[i] = "t"){
     return arr.replace(/t/gi, "7")}
  }
}
export {
  approximatelyEqual,
  average,
  censorVowels,
  divide,
  fullName,
  generateSentence,
  leetspeak,
  stickyCase,
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(getRandomInt(1, 6));

/* here is the new feature!*/
const greetUser = (name) => {
  return `Hello, ${name}!`;
};

console.log(greetUser(userName));

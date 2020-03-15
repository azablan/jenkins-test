const fetch = require('node-fetch');

const isPositive = (n) => {
  return n > 0;
};


const range = (n) => {
  const numbers = [];
  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }
  return numbers;
};

const double = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
};

class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  bark() {
    return `${this.name} barks`;
  }

  run() {
    return `${this.name} runs`;
  }
}

const fetchDirector = async (title) => {
  const url = `http://www.omdbapi.com/?t=${title}&apikey=3a92536e`;
  const response = await fetch(url);
  const movie = await response.json();
  return movie.Director;
};

module.exports = {
  isPositive,
  range,
  double,
  Dog,
  fetchDirector,
};
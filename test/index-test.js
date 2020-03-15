const { isPositive, range, double, Dog, fetchDirector } = require('../index.js');
const assert = require('assert');

describe('#isPositive', function() {
  it("should return true when the number is positive", function() {
    assert.equal(isPositive(10), true);
  });

  it('should return false when the number is negative', function() {
    assert.equal(isPositive(-5), false);
  });

  it('should return false when the number is zero', function() {
    assert.equal(isPositive(0), false);
  });
});

describe('#range', function() {
  it("should return an numbers from 1 up to n", function() {
    assert.deepEqual(range(4), [1,2,3,4]);
  });
});

describe('#double', function() {
  it("should return an array of twice every element", function() {
    assert.deepEqual(double([1,2,3]), [2, 4, 6]);
  });

  it('should return the original array', function() {
    let array = [1, 2, 3];
    assert.equal(double(array), array);
  });

  it('should mutate the original array by doubling every element', function() {
    let array = [1, 2, 3];
    double(array);
    assert.deepEqual(array, [2, 4, 6]);
  });
});


describe("Dog", function() {
  let dog1;
  let dog2;

  beforeEach(function() {
    dog1 = new Dog('fido', 4);
    dog2 = new Dog('snoopy', 10);
  });

  it('should be initialized with a name and age', function() {
    assert.equal(dog1.name, 'fido');
    assert.equal(dog1.age, 4);
    assert.equal(dog2.name, 'snoopy');
    assert.equal(dog2.age, 10);
  });


  describe("#bark", function() {
    it('should return a string saying `<name> barks`', function() {
      assert.equal(dog1.bark(), 'fido barks');
      assert.equal(dog2.bark(), 'snoopy barks');
    });
  });

  describe("#run", function() {
    it('should return a string saying `<name> runs`', function() {
      assert.equal(dog1.run(), 'fido runs');
      assert.equal(dog2.run(), 'snoopy runs');
    });
  });
});

describe('#fetchDirector', function() {
  it('should return a string of the movie\'s director', async function() {
    assert.equal(await fetchDirector('The Matrix'), 'Lana Wachowski, Lilly Wachowski');
  });
});
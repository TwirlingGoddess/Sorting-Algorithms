import {assert} from 'chai';
import bubbleSort from '../lib/bubbleSort.js';

const array1 = [9, 7, 8, 4];

  describe('test', function() {
    it.only('should return true', function() {
      assert.equal(true, true);
    });

    it('should take an array', function() {
      assert.equal(bubbleSort.array, []);
    })
  });
  // should be a function
  // should return an array
  // should return an array of the same length
  // should sort a array of numbers
  // should sort a array of letters
  // should sort a array of words
  // should sort a array of arrays numbers
  // should sort a array of arrays words
  // should sort a large array
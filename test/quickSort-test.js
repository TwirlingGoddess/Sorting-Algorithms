import {assert} from 'chai';
import quickSort from '../lib/quickSort.js';

const array = [10, 2, 3, 9, 190, 43, 21, 8,]

  describe('test', function() {
    it('should return true', function() {
      assert.equal(true, true);
    });
    
    it('should take an array', function() {
      assert.equal(quickSort.array, []);
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
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
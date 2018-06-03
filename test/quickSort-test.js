import {assert} from 'chai';
import quickSort from '../lib/quickSort.js';

  describe('test', function() {
    it('should return true', function() {
      assert.equal(true, true);
    });
    
    it('should take an array', function() {
      assert.equal(quickSort.array, []);
    })
  });
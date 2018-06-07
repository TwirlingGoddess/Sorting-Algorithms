import { expect } from 'chai';
import insertionSort from '../lib/insertionSort.js';

const unSortedArray = [7, 5, 1, 9];

  describe('test', function() {
    it('should be a function', function() {
      expect(true).toEqual(true);
    });

    it('should return an array', function() {
      expect(insertionSort.array).toEqual([]);
    });

    it('should return an array of the same length', function() {
      expect(unSortedArray.length).toEqual(insertionSort.array.length)
    });

    it('should sort an array of numbers', function() {
      expect([7, 5, 1, 9]).toEqual([1, 5, 7, 9])
    });
    
    it('should sort an array of letters'), function() {
      expect().toEqual()
    });
    
    it('should sort an array of words'), function() {
      expect().toEqual()
    });
    
    it('should sort an array of arrays numbers'), function() {
      expect().toEqual()
    });
    
    it('should sort an array of arrays words'), function() {
      expect().toEqual()
    });
    
    it('should sort a large array'), function() {
      expect().toEqual()
    });

});
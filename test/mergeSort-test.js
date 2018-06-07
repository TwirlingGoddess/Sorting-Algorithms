import { expect } from 'chai';
import immaMerge from '../lib/mergeSort.js';
import bipartiSort from '../lib/mergeSort.js'

const array1 = [9, 7, 8, 4];

  describe('test', function() {
    it('should be a function', function() {
      expect(true).toEqual(true);
    });

    it('should return an array', function() {
      expect(immaMerge.array).toEqual([]);
    });

    it('should return an array of the same length', function() {
      expect(array1.length).toEqual(immaMerge.array.length)
    });

    it('should sort an array of numbers', function() {
      expect([9, 7, 8, 4]).toEqual([4, 7, 8, 9])
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
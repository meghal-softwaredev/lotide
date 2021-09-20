# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @meghalshah210/lotide`

**Require it:**

`const _ = require('@meghalshah210/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: function that asserts if two arrays are equals
* `assertEqual(actual, expected)`: function that asserts if two values are equals
* `assertObjectsEqual(actual, expected)`: function that asserts if two objects are equals
* `countLetters(sentence)`: function that returns counts of each letter of a sentence
* `countOnly(allItems, itemsToCount)`: function that takes an array and returns counts for a specific subset mentioned in itemsToCount
* `eqArrays(actual, expected)`: function that performs comparison between two arrays to determine if they are equivalent
* `eqObjects(object1, object2)`: function that performs comparison between two objects to determine if they are equivalent
* `findKey(object, callback)`: function that scans the object and return the first key for which the callback returns a truthy value
* `findKeyByValue(object, value)`: function returns key for value in given object if it exists
* `flatten(array)`: function that flattens an array of arrays into a single-level array
* `head(array)`: function that returns the first element from the array
* `letterPositions(sentence)`: function that returns all the indices for each character in the sentence
* `map(array, callback)`: function that transforms the array based on callback and returns new array
* `middle(array)`: function that returns the middle elements of an array
* `tail(array)`: function that retrieves all but first element of the array
* `takeUntil(array, callback)`: function that returns elements of the array from beginning until callback condition is satisfied
* `without(source, itemsToRemove)`: function that removes elements mentioned in itemsToRemove from source array

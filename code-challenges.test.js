// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

//Test: 
describe("shuffleArray", () => {
    //describe what the test does
    it("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
        //variables given
        const colors1 = ["purple", "blue", "green", "yellow", "pink"]
        // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
        //expected outputs
        expect(shuffleArray(colors1)).toEqual(expect.arrayContaining(["blue", "green", "yellow", "pink"]))
        expect(shuffleArray(colors2)).toEqual(expect.arrayContaining(["aquamarine", "indigo", "saffron", "periwinkle", "ochre"]))
    })
})
//Fail received: 
//ReferenceError: shuffleArray is not defined

// b) Create the function that makes the test pass.
//Function name: shuffleArray
//Parameter: array
//Function takes in an array, removes the first item from the array and shuffles the remaining content
//Use slice() method at first index
//Use array.sort() to sort through negative and positive numbers 
//Use Math.random() - 0.5 to create a random positive or negative number

const shuffleArray = (array) => {
    return array.slice(1).sort(() => Math.random() - 0.5)
}

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

// const nums1 = [3, 56, 90, -8, 0, 23, 6]
// // Expected output: [-8, 90]
// const nums2 = [109, 5, 9, 67, 8, 24]
// // Expected output: [5, 109]

// //Test: 
describe("minMaxNumbers", () => {
    //describe what the test does
    it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order.", () => {
      //variables given
      const nums1 = [3, 56, 90, -8, 0, 23, 6]
      // Expected output: [-8, 90]
      const nums2 = [109, 5, 9, 67, 8, 24]
      // Expected output: [5, 109]
    //expected outputs
    expect(minMaxNumbers(nums1)).toEqual([-8, 90])
    expect(minMaxNumbers(nums2)).toEqual([5, 109])
    })

})
//Fail received: 
//ReferenceError: minMaxNumbers is not defined

// b) Create the function that makes the test pass.
//Function name: minMaxNumbers
//Parameter: array of numbers
//Function takes an array of numbers and returns an array of the minimum and maximum numbers in that order.
//Use Math.min() to return the number in the array with the lowest value.
//Use Math.max() to return the number in the array with the highest value.
const minMaxNumbers = (array) => {
    return [Math.min(...array), Math.max(...array)]
}

//Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.
// --------------------3) 

// a) Create a test with an expect statement using the variables provided.

// const testArray1 = [3, 7, 10, 5, 4, 3, 3]
// const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
//Test: 
describe("noDuplicateArray", () => {
    //describe what the test does
    it("takes in two arrays as arguments and returns one array with no duplicate values.", () => {
      //variables given
      const testArray1 = [3, 7, 10, 5, 4, 3, 3]
      const testArray2 = [7, 8, 2, 3, 1, 5, 4]
      const testArray3= testArray1.concat(testArray2).unique()
    //expected outputs
    //Here, I'm having trouble determining how to show our output as a single array by combining testArray1 and testArray2. I keep receiving a failed test result of "Your test suite must contain at least one test."
    expect(noDuplicateArray(testArray3)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })

})

// b) Create the function that makes the test pass.
//Function name: noDuplicateArray
//Parameter: arrays 
//Function takes in two arrays as arguments and returns one array with no duplicate values.
//Use .concat method to combine arrays
//Use .unique to remove duplicate values
//I believe I need to create a third variable called testArray3 that contains both arrays concatenated, but this isn't working in the test. 
const testArray3 = (array) => {
    return testArray3
}
//I am still getting the same error. I believe the function works properly, although I would have it written with the variable in the return line, showing concatenation with testArray1 and testArray2. 



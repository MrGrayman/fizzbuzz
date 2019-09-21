const FizzBuzz = require("./fizzbuzz");
describe("Test FizzBuzz", () => {
    // test("Test 3 expect Fizz", () => {
    //     const result = FizzBuzz.say(3);
    //     expect(result).toEqual("Fizz"); //Assert Function
    // });

    // test("Test 5 expect Buzz", () => {
    //     const result = FizzBuzz.say(5);
    //     expect(result).toEqual("Buzz"); //Assert Function

    // });

    // test("Test 15 expect FizzBuzz", () => {
    //     const result = FizzBuzz.say(15);
    //     expect(result).toEqual("FizzBuzz"); //Assert Function

    // });

    test("Test 5%5 expect 0", () => {
        const result = FizzBuzz.mod(5, 5);
        expect(result).toEqual(0); //Assert Function

    });

    test("Test 5%3 expect 2", () => {
        const result = FizzBuzz.mod(5, 3);
        expect(result).toEqual(2); //Assert Function

    });

    test("Test 5%7 expect 5", () => {
        const result = FizzBuzz.mod(5, 7);
        expect(result).toEqual(5); //Assert Function

    });

});
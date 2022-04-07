/**
 * @jest-environment jsdom
 */


const { TestWatcher } = require("jest");
const addition = require("../calc");


describe("Calculator", () => {
    describe("addition function", () => {
        test("Should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        })
    });
    describe("subtract function", () => {
   
    });
    describe("Multiply function", () => {
    
    });

    describe("Divide function", () => {

    });
});




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
        test("Should return 73 for 42 + 31", () => {
            expect(addition(42, 31)).toBe(73);
        })
    });
    
    describe("Multiply function", () => {
    
    });

    describe("Divide function", () => {

    });
});




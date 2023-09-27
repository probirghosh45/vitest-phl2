import { it, expect } from "vitest";
import { add } from "./math";

it("should return the correct sum if any array is provided", ()=>{
   
   // Arrange 
   const numbers = [1,2,3,10]
   const expectedResult = numbers.reduce((acc,cur)=>acc+cur)
   // acc= accumulator ,  cur = current value

   // Actions
   const result = add(numbers)

   // Assertion
   expect(result).toBe(expectedResult)
});


// for NAN data types
it("should provide NAN if at least one invalid number is provided", ()=>{
   // Arrange 
   const numbers = [1,2,'invalid',10]
   // const expectedResult = numbers.reduce((acc,cur)=>acc+cur)
   // acc= accumulator ,  cur = current value

   // Actions
   const result = add(numbers)

   // Assertion
   expect(result).toBeNaN()
});


// for String data types
it("should provide correct sum if an array numeric string is provided", ()=>{
   // Arrange 
   const numbers = ['1',2,'10']
   const expectedResult = numbers.reduce((acc,cur)=> +acc+ +cur)
   // acc= accumulator ,  cur = current value , +acc / +cur means converted to number   

   // Actions
   const result = add(numbers)

   // Assertion
   expect(result).toBe(expectedResult)
});

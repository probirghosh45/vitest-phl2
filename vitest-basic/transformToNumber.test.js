import { expect, it } from "vitest";
import { transformToNumber } from "./transformToNumber";

it("should be return a number if numeric string is provided", () => {
    const string = '5';
    const result = transformToNumber(string);
    expect(result).toBeTypeOf("number"); //limitation : NAN is number type
    expect(result).toBeTypeOf("number"); 

})
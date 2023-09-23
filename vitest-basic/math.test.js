import { it, expect } from "vitest";
import { add } from "./math";

it("should return the correct sum if any array is provided", ()=>{
   const result = add([1, 2, 3])
   expect(result).toBe(6)
});

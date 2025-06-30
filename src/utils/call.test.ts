import { IDataModel } from "../models/IDataModel";
import { fncCall, fncArr, fncObject, fncNullObj, fncUndefinedObj, dataString, throwsError } from "./util";


describe('fncCall', () => {
    
  it('return number value', () => {
    const result = fncCall();
    expect(result).toBe(10);
  });

  it('array control', () => {
    const result = fncArr();
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('object control', () => {
    const result = fncObject()
    const obj: IDataModel = {
        id: 1,
        name: "John Doe",
        email: "ali@mail.com",
        age: 30,
        isActive: true
    }
    expect(result).toEqual(obj);
  })

  it('null object control', () => {
    const result = fncNullObj();
    expect(result).toBeNull();
  });

  it('Undefined object control', () => {
    const result = fncUndefinedObj();
    expect(result).toBeUndefined();
  });

  it('Contain arr control', () => {
    const result = fncArr();
    expect(result).toContain(5);
  });

  it('Contain string control', () => {
    const result = dataString()
    expect(result).toContain("ello");
  });

  it('Contain string count control', () => {
    const result = dataString()
    expect(result).toHaveLength(13);
  });

  it('Throws error control', () => {
    const result = throwsError()
    expect(() => JSON.parse("x")).toThrow();
  });




});

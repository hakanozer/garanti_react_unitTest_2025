import { IDataModel } from "../models/IDataModel";

export const emailValid = (email: string): boolean => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const fncCall = () => {
  const data = 10
  return data
}

export const fncArr = () => {
  const data = [1, 2, 3, 4, 5]
  return data
}

export const fncObject = () => {
  const data: IDataModel = { id: 1, name: 'John Doe', email: 'ali@mail.com', age: 30, isActive: true }
  return data
}

export const fncNullObj = () => {
  const data: IDataModel | null = null;
  return data;
}

export const fncUndefinedObj = () => {
  const data: any = undefined;
  return data
}

export const dataString = () => {
  const data = "Hello, World!";
  return data;
}

export const throwsError = () => {
  return ""
}

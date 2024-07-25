let Name: string = "deepak";
let num: number = 28;
let check: boolean = false;
let random: any = 33;

let firstName = <string>"Billu";
let age = <number>34;
let isLegal = <boolean>false;
let randomStranger = <any>"kallu";

//union expression
let surname: string | number;
surname = 333;

//functions
const func1 = (n2: number, n1: number) => {
  return "this is sum " + (n2 + n1);
};

// declared return number type only we get error in this code it must return number only
const func2 = (n2: number, n1: number): number => {
  // return "this is sum " + n2 + n1;
  return n2 + n1;
};

console.log(func1(2, 3));

/// type keyword
type Name = string | number;

// defining structure
type userDetail = (name: string, age: number) => number;

const printDetail: userDetail = (name, age) => {
  console.log(name, age);
  return age;
};

console.log(printDetail("deepak", 26));

//array

const arrNum: number[] = [122, 223, 911];
const arrString: string[] = ["deepak", "akshay", "billu"];
const arr3:Array<string> = ["deepak", "yash", "damini"];


arr3.forEach(i => console.log(i.toUpperCase())) 
arrNum.forEach(i => console.log(i.toFixed(2)))

//tuple

const arr: [number, number, number] = [3,2,1]; // any less or more added in array will give error

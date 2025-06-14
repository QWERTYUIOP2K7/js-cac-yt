"use strict"; //treat all js code as newer version

//alert("hello")
//we are using node js not browser
console.log(3+3)

let name = "aabhas"
let age = 12
let isLoggedIn = false
//number => 2 to the power 53
//bigint
//string => ""
//boolean => true false
//null => standalone value
// symbol => unique used in react and figma

console.log(typeof true);
console.log(typeof  null); 
//In the very first implementation of JavaScript, values were stored in a 32-bit structure: part of it served as a type tag and the rest held the value.
//The type tag for objects was 0.
//null was represented using a null pointer (0x00), which meant it also had a type tag 0.
//Because there was no special check for null, the typeof operator simply interpreted it as an object
console.log(typeof undefined); // undefined

// var a=10;
// console.log(typeof(a))
//a is an number (operand)

//1.Primitive 2.Non Primitive 
//Number,String,Boolean,Null ,undefined,Symbol 
//Non-Primitive -->Object(Everything in js is an object )


// var a=8;//Number 
// var b="8"//String
// console.log(a===b)


//is null == undefined  
// var a=undefined;

// console.log(typeof(a))

// //Type of undefined is undefined 
// //Type of Null is object

// var b=null;
// console.log(typeof(b));

// console.log(a===b) //

// var a=20;
// var b="Ramu"
// var c=(a*b)
// console.log(typeof(c))


// function add(a,b){

//     return (a+b)
// }
// var sum=add(20,40)
// console.log(sum)


// var sum=function (a,b){

//     console.log(a+b)
// }
// sum(20,100)
// sum(20,180)


// (function (){
//     //logic of code
// }) ()


// (function (a,b){

// console.log(a+b)

// })(20,40)(20,40)


// const jan=(names)=>{

// if(names=="vijay"){

//     return function (age){
//         console.log(`My Name is ${names} and my age is ${age}`)
//     }
// }
// if(names=="riyaz"){

//     return function (age){
//         console.log(`My Name is ${names} and my age is ${age}`)
//     }
// }
// if(names=="vasu"){

//     return function (age){
//         console.log(`My Name is ${names} and my age is ${age}`)
//     }
// }
// else{

//     return function (){
//         console.log(`Welcome to elevation`)
//     }
// }



// }
// jan("vasu")(22)



// 1.We can assign a function to an variable 


// const add=function (a,b){

//     console.log(a*b)


// }
// add(2,5)


//2.2.we can pass a function as an argument 


// const myName=()=>{

//     return "Hello"

// }

// const wishes=(sayHi,names)=>{

//     console.log(sayHi()+names)
// }
// wishes(myName,"vijay ")


//these Explains how we are treating an another function as an value ,the function that we pass an argument to another function is known as call back function ,Myname is an calll back function and wishes is an first class function 

//3. Function can be returned by another function 

// function a(){

//     return function b(){

// console.log("Hello vijay kumar")

//     }

// }
// a()()



var sum=function (a,b)
{

    console.log(a*b)

}
sum(20,5)
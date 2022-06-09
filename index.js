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



// var sum=function (a,b)
// {

//     console.log(a*b)

// }
// sum(20,5)

//Impure function :Modifying an outer variable is nothing but impure function i.e its having an side effect 

// var x=10;

// function add()

// {
// console.log(x)
// x++;

// }
// add()
// add()
// add()
// add()
// add()


//pure function:


// function add(x)
// {

// console.log(x+1)


// }

// add(12)
// add(12)
// add(12)
// add(12)
// add(12)


//copy homework 
//do home work 


// function do_homework(x)
// {
// x()
//     console.log("do homwork")
// }


// function copy_homework()
// {

//     console.log("copy homwork")
// }


// do_homework(copy_homework)

// function* myGen()
// {

// yield "a"  //a is nothing but yieldd expression
// yield "b"
// yield "c"


// }
// const store=myGen()
// console.log(store.next().value)
// console.log(store.next())
// console.log(store.next())
// console.log(store.next())
// // console.log("A is paused and outer cosole is getting into an action ")
//  //next: to execute the value 


// function outer()
// {

//     var a = "outer Variable "
    
//       function innerfunction(){
//              console.log(a)

//     }

// return innerfunction
// }

// const store=outer()
// store()


// function add(a,b,c)
// {


// return a+b+c

// }
// const store=add(2,5,7)
// console.log(store)

// function add(a){

// return function (b){

// return function (c){



//     return a+b+c;
// }

// }


// }

// let res=add(2)(4)(6)
// console.log(res)
// // console.log(res)
// // let data=res(4)
// // console.log(data)
// // let data1=data(20)
// // console.log(data1)


// const store=new Map()
// obj={}
// store.set(obj,100)
// console.log(store)



// const arr=[100,200,300,400,500]

// let returnvalue=arr.map((x)=>x+1)

// console.log(arr)
// console.log(returnvalue)



const arr=[100,200,300,400,500]


let returnvalue=arr.forEach(num =>
    console.log(`${num}x${num}=${num*num}`))

console.log(arr)
console.log(returnvalue)


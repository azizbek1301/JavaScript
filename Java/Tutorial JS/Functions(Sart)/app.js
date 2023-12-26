

// let age=24
// console.log(age)
// // function Declaration

// function sayHello()
// {
//     console.log("Hello function decloration")
    
// }
// sayHello()

// // function expression

// function  sayBye(){
//     console.log("Say Bye Bye")
// }

// const sayByeBye=function()
// {
//     console.log("QalesiLar");
// }

// sayByeBye()

// // ARROW FUNCTION

// const nice = () =>{
//     console.log("this is arrow function")
// }

// nice()


// const sayHello=function()
// {
//     console.log("Hayirli kun")
// }

// sayHello()


// callBack Functions


// const myFunctions=(callbackFunc)=>{
//     let number=20
//     callbackFunc(number)
// }


// myFunctions(function(){
//     console.log(value)
// })

const ismlar=["Ahror","Doniyor","ali","vali"]
const newIsmlar=[]

ismlar.forEach(function(ism){
    const item=ism.charAt().toUpperCase() + ism.slice(1).toLowerCase() + "bek"
    newIsmlar.push(item)
})

console.log(newIsmlar)
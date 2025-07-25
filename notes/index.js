

// CALLBACK 

//a function can accept another function as a parameter
// callbacks allow one function to call another at a later time
// a callback function can execute after another function has finished executing (use of setTimeout)


// a callback is a function you pass as an arguement to another function, so tht the second function can run it later, usually after finishing some task.
// it helps u control what happens next


// function calc(a, b, callback)
// {
//     let result = callback(a,b)
//     return result
// }

// function add(a, b)
// {
//     return a + b
// }

// console.log(calc(3,4,add))



// const showMessage = (callback) => 
// {
//     console.log(callback)
// }

// const firstMessage = (callback) => 
// {
//     setTimeout(() => {
        
//         showMessage("Hello")
//         callback()
//     }, 2000)
// }

// const secondMessage = () =>
// {
//     showMessage(("World"))
// }

// firstMessage(secondMessage)

// function greetName(name, callback)
// {
//     console.log("Hello " + name)
//     callback()

// }

// function sayBye()
// {
//     console.log("Bye")
// }

// greetName("Alice", sayBye)



// CALLBACK HELL - nested callbacks


// let stocks = {
  
//   fruits: ["strawberry", "grape", "apple", "banana"],
  
//   liquid: ["water", "ice"],
  
//   holder: ["cone", "cup", "stick"],
  
//   toppings: ["chocolate", "peanuts"],
// }

// let order = (fruitname, callproduction) => {
  
//   setTimeout( () => {
    
//     callproduction()
    
//     console.log(stocks.fruits[fruitname] + " was selected")
//   } , 2000)
  
  

// }

// let production = () => {
  
//   setTimeout( () => {
    
//     console.log("Production started")
    
//     setTimeout ( () => {
      
//       console.log("Fruit has been chopped")
      
//       setTimeout ( () => {
        
//         console.log(stocks.liquid[0] + " was added")
        
//         setTimeout ( () => {
          
//           console.log("Machine started")
          
//         },1000)
        
//       },1000)
      
//     },2000)
    
//   },0000)
// }

// order(0,production)







// PROMISES

// pending -- fulfilled -- rejected

// pending -- task is in initial state
// fulfilled -- task was completed successfully and result is available
// rejected -- the task failed and error is given


// let checkEven = new Promise((resolve, reject) => {
//     let number = 4;
//     if (number % 2 === 0) resolve("The number is even!");
//     else reject("The number is odd!");
// });
// checkEven
//     .then((message) => console.log(message)) // On success
//     .catch((error) => console.error(error)); // On failure




// let checkRandom = new Promise( (resolve, reject) => {

//     let randomNum = Math.random() * 10

//     if (randomNum > 5)
//     {
//         resolve("Number is more than 5 ")
//     }
//     else
//         reject("Number is less than 5")

//     console.log(randomNum)
// })

// checkRandom.then((message) => console.log(message))
// .catch((error) => console.error(error))



// let allGood = true

// let checkAllGood = new Promise( (resolve, reject) => {

//     if(allGood)
//         resolve("True")
//     else
//         reject("False")

// }) 

// checkAllGood.then( (message) => console.log(message))
// .catch( (error) => console.error(error) )



//if goes to .then where message is text inside resolve and else goes to catch and error is text inside reject
// resolve -- .then(message)
// reject -- .error(catch)



// promise.all()


// ASYNC AWAIT and FETCH API


//async function always returns a promise
// prepare url -> sync
// await -> fetch data -> network call -> async 
// process data -> sync


// fetch('<URL>', {})
// .then(response => console.log(response))
// .catch(error => console.log(error))


const url = 
'https://timeapi.io/api/time/current/zone?timeZone=Europe%2FAmsterdam'


async function getData()
{
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    console.log(data.day)
}

getData()
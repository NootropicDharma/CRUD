const mongoose = require('mongoose')
//import models 
const Cat = require("./models/Cat.model")






mongoose
.connect("mongodb://localhost/exampleApp")
.then(x => console.log(`conntected to mongo! Database name: "${x.connections[0].name}"`))
.catch(err => console.error('Error connecting to mongo', err));



//   C        R       U         D
//   create   read    update    delete 

//CREATE 

Cat.create({
    name: "Peaches",
    color:234567,
    age:5,
    isAvailable:true
})
.then(newCats => {console.log("CREATE:", newCats)})
.catch(error => {console.log("Error en CREATE:", error)})




//READ

// find({query}, {projections}, {sort, linit skip}) etc etc 

Cat.find({name:'Rosita'},"name", {sort:{name:-1}})
.then(kitty => {console.log("READ:", kitty)})
.catch(error => {console.log("Error en Read:", error)})

Cat.find()
.then(all=>{console.log("here are all cats", all)})
.catch(error => {console.log("didn't work", error)})



//UPDATE 

//updateMany() --> actualizar varios 
//updateOne()  --> actualizar uno, sera la primera coincidencia, osea el primero que salga. 
//findByIdAandUpdate() --> encuentra una especifico por ID y lo actualiza 

Cat.updateMany({isAvailable: "true"}, {age:9}) //all that have isAvailable true, update the age to 5.  
.then(updateCats=> {console.log("updateMany:", updateCats)})
.catch(error=> {console.log("Error en updateMany:", error)})

Cat.updateOne({color:234567},{color:"Rosita"})
.then(updateOneCat => {console.log("updateOne:",updateOneCat)})
.catch(error => { console.log("Error en updateOne:", error)})

Cat.findByIdAndUpdate("638d21e966075fcac69ffebd", {name: 'Champurrado'},{new:true}) //new:true is to bring the new updated value 
.then(newUpdatedKitty => {console.log("this is the new updated cat", newUpdatedKitty)})
.catch(error => {console.log("Error with the updated cat", error)})



//DELETE same as update

// deleteMany({query,item:value to be deleted) --> deletes all
// deleteOne({query},item:value to be deleted) -->  deletes the first one 
// findByIdAndRemove() deletes 

Cat.findByIdAndDelete("638ae5754afd2da25c0782b0")
.then(()=> console.log("deleted")) // no need for a parameter here since it is deleting 
.catch(error=> console.log("Error en findByIdAnDelete:", error))

Cat.deleteMany({name:"Peaches"})
.then(()=>{console.log("deletedAll")})
.catch(err => {console.log("error in deleting all", err)})

//to make this code go in order we would have to do ASYNC AND AWAIT OR promise.ALL to make it asyncronous since mongoose is synconronous.   

// async function insertCats(){

//     try{
//         const result1 = await Cat.create({
//             name: "Peaches",
//             color:234567,
//             age:5,
//             isAvailable:true
//         })
       
//         const result2 = await Cat.updateOne({color:234567},{color:"Rosita"})

//         const result3 = await Cat.find({name:'Rosita'},"name", {sort:{name:-1}})

//         const result4 = Cat.find({})

//         console.log("Create", result1)
//         console.log("update", result2)
//         console.log("findone", result3)
//         console.log("findall", result4)

//     }catch(error){
//         console.log(error)
//     }
// }

// insertCats()      THIS NEEDS WORK TO FULLY UNDERSTAND IT 
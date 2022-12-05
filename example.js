const mongoose = require("mongoose");

mongoose
.connect("mongodb://localhost/exampleApp")
.then(x => console.log(`conntected to mongo! Database name: "${x.connections[0].name}"`))
.catch(err => console.error('Error connecting to mongo', err));



const Cat = mongoose.model('Cat', {
    name: String,
    color: String, 
    age: Number
});



// the object passed in as the second argument to mongoose.model is called a SCHEMA {name:String}.  

const kitty = new Cat ({
    name: "Ironhacker",
    color: "Naranja",
    age: 10
})


// kitty
// .save()
// .then(newCat => console.log(`A new cat is created: ${newCat}!`))
// .catch(err => console.log(`Error while creating a new cat: ${err}`))


//metodos de mongoose para traerme todos los gatos de mi base de datos 

//NombredelModel.find() .then().catch()
//find() que busta todos los documentos de ese Modelo(Collection)!!
//findOne() busca un elemento 
//findById() busca un elemento en especifico 

Cat.find()
.then( cats => console.log("cats:", cats))
.catch(error => console.log("error find query cat", error))

Cat.find( {name: "Ironhacker"})//.sort() .project .collation      //with a filter   {name: "Ironhacker"}  all elements that have this name. 
.then( cats => console.log("query cats:", cats))
.catch(error => console.log( "error find query cat", error))

/*
Cat.findOne( {filter})
.projection({field:1 || 0})
.sort( {field: 1 || -1})
.limit()
.skip()
.populate(<expression>)
.then( cats => console.log("query cats:", cats))
.catch(error => console.log( "error find query cat", error))
*/

Cat.findOne({name:"Ironhacker"})
.then( cats => console.log("query One cats:", cats))
.catch(error => console.log("error find query ONE cat", error))


// findById ("1234567890")


Cat.findById("6389808c2e5c0c80ac4a2526")
.then( cat => console.log("query ID cats:", cat))
.catch(error => console.log("error find query ID cat", error))




//exampleApp is the database we are connectin. should automatically create a database however i don't even see it. it worked i had to save() 
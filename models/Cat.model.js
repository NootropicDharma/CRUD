//new

const {Schema, model} = require("mongoose")

//crear un Schema is a class so it needs NEW 

const catSchema = new Schema({
    name: String,
    color: String, 
    age: Number, 
    isAvailable: Boolean,

})


//very very important we export the document 


//before   
//const Cat = mongoose.model('Cat', catSchema)
//module.exports = Cat


//now

module.exports = model("Cat", catSchema)
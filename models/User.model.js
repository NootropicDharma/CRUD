//Destructuro y asigno 

const {Schema, model} = require("mongoose");

//crear el Schema
//Scheme ({esqueleto}, {timestamps: true})    //this is to say it registered and the last time it was update will record data 

const userSchema = new Schema ({
    //email:String
    email:{
        type:String,
        required:true, //here is mandatory which is why we use type:String then required:true it carries validation 
        unique:true
    },

    username:{
        type:String,
        required:true,
        unique:true  //because the username is unique but make sure you add required:true otherwise it will mark it null 
    },

    password:{
        type:Number,
        required:true,
        unique:true
    },

    avatarPic: {
        type:String, //because it will be an URL
        default:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
    },

    listFriends: {
    type: [String]
    },

    listFriends:{
        type: [{
            name:String,
            age:Number,
            hobbies:String   //puede haber de uno a muchos.  this is just a frame for whatever comes 
        }]
    },
    //enum only can put whatever is in the enum 
    gender:{
        type:String,
        enum:["Male", "Female", "Otro","prefiero no contestar"], //to choose from 
        default:"Otro" //no idea aqui por que el default seria "Otro". 
    }





},{timestamps:true})


module.exports = model("User", userSchema)
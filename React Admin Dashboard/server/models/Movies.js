const mongoose = require("mongoose");
const {Schema, model} = mongoose;


const moviedata = new Schema({
    Hall: {type: String, required: true, unique: true},
    Name: String ,
    Poster: String ,
    Trailer: String ,
    Seats: [Number],
});


module.exports = model("movie", moviedata);
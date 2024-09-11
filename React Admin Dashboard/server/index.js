const express = require("express");
const app = express();
const cors = require("cors");
const Movie = require("./models/Movies");
const mongoose = require("mongoose")
require("dotenv").config();

app.use(cors({
    credentials: true,
    origin: "http://localhost:5173",
}));

app.use(express.json());


// console.log(process.env.MONGO_URL);


const main = async () => {
    try {
        await app.listen(4000);
        mongoose.connect(process.env.MONGO_URL);
        console.log("new server running on port 5000")
    } catch (error) {
        console.log(error);
    }
}

main();



app.get('/test', async (req,res) => {
    // res.json("cheacking server")
    try {
        const obj = await Movie.find()
        // res.json({obj})
        res.send(obj)
    } catch (error) {
        res.json("problem while getting data"+error)
    }
})



app.post('/test', async (req,res)=> {
    const {Hall, Name, Poster, Trailer, Seats} = req.body;
    try {
        const ddd = await Movie.create({
            Hall, 
            Name, 
            Poster, 
            Trailer,
            Seats
        });
        console.log("THis works")
        res.json(ddd);
    } catch (error) {
        res.json("fucked "+error)
    }
    
});

app.post('/delete', async (req,res) => {
    const {_id} = req.body;
    try {
        await Movie.findByIdAndDelete(_id).then(()=> console.log("Deleted Successfully....")).catch((err) => console.log(err))
        res.json("deleted successfully from req body" + _id)
    } catch (error) {
        res.json("could not delete " +error)
    }
})

app.post('/update', async (req, res) => {
    const{_id, Hall, Name, Poster, Trailer, Seats} = req.body;
    try {
        const uuu = await Movie.findByIdAndUpdate(_id, {Hall, Name, Poster, Trailer, Seats}).then(()=> res.send("Updated Successfully....")).catch((err) => console.log(err))
        console.log("daijobu " + uuu)
    } catch (error) {
        res.json("data not updated " +error)
    }
    
})

app.post('/reset', async (req, res) => {
    const{Hall, Seats} = req.body;
    try {
        const uuu = await Movie.findOneAndUpdate({Hall}, {Seats}).then(()=> res.send("Updated Successfully....")).catch((err) => console.log(err))
        console.log("daijobu " + uuu)
    } catch (error) {
        res.json("data not updated " +error)
    }
})

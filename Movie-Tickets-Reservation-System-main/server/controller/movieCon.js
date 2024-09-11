const Movie = require("../models/MoviesScema")

const getmoviedata = async (req,res) => {
    try {
        const obj = await Movie.find()
        // res.json({obj})
        res.send(obj)
        console.log("getting data"+obj)
    } catch (error) {
        res.json("problem while getting data"+error)
    }
}

module.exports = {getmoviedata}
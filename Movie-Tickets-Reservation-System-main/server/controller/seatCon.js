const Movie = require("../models/MoviesScema")

const updateseats = async (req,res) => {
    const{Hall, Seats} = req.body;
    try {
        const uuu = await Movie.findOneAndUpdate({Hall}, {Seats}).then(()=> res.send("Updated Successfully....")).catch((err) => console.log(err))
        console.log("update called " + uuu)
    } catch (error) {
        res.json("data not updated " +error)
    }
}

module.exports = {updateseats}
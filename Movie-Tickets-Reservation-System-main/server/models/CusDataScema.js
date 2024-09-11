const mongoose = require("mongoose")
const {Schema, model} = mongoose;

const customerdata = new Schema({
    Moviename: String,
    Date: String ,
    Time: String ,
    Notickets: String,
    Total: String,
    Name: String ,
    Email: String ,
    Telephone: String ,
});

module.exports = model("customer-data", customerdata);
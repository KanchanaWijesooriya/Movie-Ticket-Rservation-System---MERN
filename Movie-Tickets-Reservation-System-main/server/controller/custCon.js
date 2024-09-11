const Adddata = require("../models/CusDataScema")
const stripe = require("stripe")("sk_test_51PjlQG01yUiu8H7zk3k9oo91aDvDSFUNxMWD3dPDPSAnEGIwZmou6zYPtPVNywvaEVmx4jPC5xbgPGyBMJXYlHMs00kovC4JUp")

const addcustData = async (req,res) => {
    try {
        const {Date, Time, Notickets, Total, Name, Email, Telephone} = req.body;
        const regadd = await Adddata.create({Date, Time, Notickets, Total, Name, Email, Telephone});
        const lineItems = [{price_data:{
            currency:"usd",product_data: {
                name: 'Movie Ticket', // Optional: You can customize this
            }, unit_amount:Total,
        },quantity:1}];
        const session = await stripe.checkout.sessions.create({
            payment_method_types:["card"],
            line_items:lineItems,
            mode:"payment",
            success_url:"https://4cbd-2402-d000-810c-23ab-39b7-28d7-1b34-490.ngrok-free.app/success",
            cancel_url:"https://4cbd-2402-d000-810c-23ab-39b7-28d7-1b34-490.ngrok-free.app/cancel"
        })
        res.json({id:session.id})
        // res.json("data added"+regadd)
    } catch (error) { 
        res.json("Error in controler "+error)
    }
}

module.exports = {addcustData}
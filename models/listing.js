const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type:String,
        required: true,

    },

    //description: String,

/*description: String,
image: {
    type: String,
    default: "https://ttg.com.bd/tours/package/19-exclusive-saintmartin-tour",
    set: (v) => 
        v === "" ? "https://ttg.com.bd/tours/package/19-exclusive-saintmartin-tour" : 
        v , 
},*/

description: String,

image: {
    filename: {
        type: String,
        default: "listingimage"
    },
    url: {
        type: String,
        default: "https://ttg.com.bd/tours/package/19-exclusive-saintmartin-tour"
    }
},
    
    
    price: Number,
    location: String,
    country: String,
});


const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

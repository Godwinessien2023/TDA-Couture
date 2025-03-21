const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    quantity:{ type:Number,}, 
    category:{
        type:String,
    },
    image:{
        type:String,
        required:true,
    },
    isAvailable: {
        type: Boolean,
        default: 'true',
    },
    ratings: [
        {
            star: Number,
            postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        },
    ],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
},
    {
    timestamps: true, 
});

//Export the model
module.exports = mongoose.model('Product', productSchema);
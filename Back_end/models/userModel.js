const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:'user',
    },
    cart:{
        type:Array,
        default:[],
    },
    isBlocked:{
        type:Boolean,
        default:false,
    },
    address: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' }],
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Products' }],
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
    refreshToken:{
        type: String,
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpire: Date,
},
    {
    timestamps: true,
});

// encrypt password with bcrypt.

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password, salt);
});
userSchema.methods.isPasswordMatched = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

//Export the model
module.exports = mongoose.model('User', userSchema);
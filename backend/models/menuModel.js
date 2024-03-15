import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
    user : { 
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    itemName: {
        type: String,
        required: true,
    },
    itemPrice: {
        type: Number,
        required: true,
        default: 0,

    },
    calCount:{
        type: Number,
        required: true,
        default: 0
    }
},{
    timestamps: true
});

const Menu = mongoose.model("Menu", menuSchema);

export default Menu;
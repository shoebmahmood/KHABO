import mongoose from "mongoose";

const custommenuSchema = new mongoose.Schema({
    user : { 
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    cmenuItems: [
        {
            name:  {type: String, required: true},
            qty:  {type: Number, required: true},
            price: {type: Number, required: true},
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "Menu"
            }
        }
    ],
    cmenuPrice: {
        type: Number,
        required: true,
        default: 0,
    }
},{
    timestamps: true
});

const CustMenu = mongoose.model("CustMenu", custommenuSchema);

export default CustMenu
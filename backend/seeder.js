import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import User from "./models/userModel.js";
import products from "./data/menuItem.js";
import Menu from "./models/menuModel.js";
import connectDB from "./config/db.js";


dotenv.config();
connectDB();
const importData = async () => {
    try {
        await User.deleteMany();
        await Menu.deleteMany();
        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id;
        
        const sampleProducts =  products.map((product) => { 
            return { ...product, user: adminUser}

        });
        
        await Product.insertMany(sampleProducts);

        console.log ('Data Imported!'.green.inverse);
        process.exit();
    }   catch (error) { 
        console.error (`${error}`.red.inverse);
        process.exit(1);


    }
}

const destroyData = async () => {
    try {
        await User.deleteMany();
        await Menu.deleteMany();
        console.log ('Data Destroyed'.red.inverse);
        process.exit();
    }   catch (error) {
        console.error (`${error}`.red.inverse);
        process.exit(1);

    }
};

if (process.argv[2] === '-d') {
    destroyData();
}   else {
    importData();
}
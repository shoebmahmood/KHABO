import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
//const userRoutes = require('./routes/user.js');
import userRoutes from './routes/user.js';

import connectDB from './config/db.js';
const port = process.env.PORT;
connectDB();
const app = express ();

app.get('/', (req, res) => {
    res.send('API is running ... ');
});

app.listen(port, () => console.log(`Server running on port ${port}`));

//routes
app.use('/api/users', userRoutes);
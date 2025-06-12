const express = require('express');
const cors = require ('cors');
const connectDB = require('./config/db')
const contactRoutes = require('./routes/contactRoutes');


require('dotenv').config();

const app = express();
connectDB();
app.use(express.json());
app.use(cors());

const userRoutes = require('./routes/userRoutes')
const projectRoutes = require('./routes/projectRoutes')

app.use('/api/auth',userRoutes)
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);

app.get('/', (req,res)=>{
    res.send("API is running...")
});

//Let's start our server
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running on the port ${PORT}`);
})

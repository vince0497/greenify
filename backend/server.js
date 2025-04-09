import  express from "express";
import path from 'path';
import dotenv from 'dotenv';

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();  

if(process.env.NODE_ENV == 'production'){
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("*", (req,res) =>{
        res.sendFile(path.resolve(__dirname,"frontend", "dist", "index.html"))
    })
}

app.listen(5000,()=>{
    console.log('Server started at http://localhost:5000/');
});
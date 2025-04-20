import  express from "express";
import path from 'path';
import dotenv from 'dotenv';
import e from "express";
import promptRoutes from "./routes/prompt.routes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use("/api/prompts",promptRoutes);

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();  

if(process.env.NODE_ENV == 'production'){
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get(/(.*)/, (req,res) =>{
        res.sendFile(path.resolve(__dirname,"frontend", "dist", "index.html"))
    });
}

app.listen(PORT,()=>{
    console.log('Server started at http://localhost:'+PORT+'/');
});
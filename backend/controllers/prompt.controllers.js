import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';


// export const createPrompts = async(req, res) => {


// }//end of create prompts



export const getPrompts = async(req,res) => {
    
    const genAI = new GoogleGenerativeAI(process.env.GEN_API+"");
    const model = genAI.getGenerativeModel({model:"gemini-1.5-flash"});
    try{
        console.log("promtttss",process.env.GEN_API)
        console.log("promtttss",process.env.BARCODE_API)
        const pr = req.params.prompt
        const bc = req.params.barcode
        const resy = await fetch(`https://eandata.com/feed/?v=3&keycode=${process.env.BARCODE_API}&mode=json&find=${bc}&has=image,company,long_desc`);
        const data = await resy.json();
        
        const prodName = data.product.attributes.product
        const category = data.product.attributes.category_text_long
 
        console.log("------------------------------")
        
        const result = await model.generateContent(pr);
        const response = await result.response;
        console.log("================")
        console.log(response)

        const out = {
            input: req.params.prompt,
            prompt: response,
            product_name:prodName,
            category:category
        }
        console.log("Daan");
        res.status(200).json({
            success: true,
            data: out
        });



    }catch(error){
        console.log("Error ", error.message);
        res.status(500).json({
            success:false,
            message: "Server error on getting prompts"
        });
    }

}// end of get prompts
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OpenAI from "openai";

import { GoogleGenerativeAI } from '@google/generative-ai';
//dotenv.config();


//const API_KEY = 
// "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";


function App() {
 // const client = new OpenAI({ apiKey: API_KEY, dangerouslyAllowBrowser: true  });
 const GEN_API = "AIzaSyC2Jot_rFbrV1xs5GUz_MwZ0E1jvZNTvpo";

  const genAI = new GoogleGenerativeAI(GEN_API);
  const model = genAI.getGenerativeModel({model:"gemini-1.5-flash"});
  
  
  const [count, setCount] = useState(0)
  const [thoughts, setThoughts] = useState("");
  const [sentiment, setSentiment] = useState("");



  // curl https://api.openai.com/v1/threads/thread_abc123/messages \
  // -H "Content-Type: application/json" \
  // -H "Authorization: Bearer $OPENAI_API_KEY" \
  // -H "OpenAI-Beta: assistants=v2" \
  // -d '{
  //     "role": "user",
  //     "content": "How does AI work? Explain it in simple terms."
  //   }'

  // const APIBody = {
  //       "role": "user",
  //       "content": "How does AI work? Explain it in simple terms."
  //     };

  //     curl https://api.openai.com/v1/threads \
  // -H "Content-Type: application/json" \
  // -H "Authorization: Bearer $OPENAI_API_KEY" \
  // -H "OpenAI-Beta: assistants=v2" \
  // -d ''

  // const createThread = async() => {
  //   await fetch("https://api.openai.com/v1/threads",{
  //     method: "POST",
  //     headers:{
  //         "Content-Type": "application/json",
  //         "Authorization": "Bearer "+API_KEY,
  //         "OpenAI-Beta": "assistants=v2"
  //     }
  //   }).then((data) =>{
  //     return data.json();
  //   });
  // }

  // const callOpenAIAPI = async() => {
  //   console.log(thoughts);
  //   await fetch("https://api.openai.com/v1/threads/thread_dR8eJngh0vYi3z77vVTs7wcQ/messages",{
  //     method:"POST",
  //     headers:{
  //       "Content-Type":"application/json",
  //       "Authorization":"Bearer " + API_KEY,
  //       "OpenAI-Beta": "assistants=v2"
  //     },
  //     body: JSON.stringify(APIBody)
  //   }).then((data) => {
  //     return data.json();
  //   }).then((data) =>{
  //     console.log(data);
  //   });
  // }//call api

  // import OpenAI from "openai";
  // const client = new OpenAI();
  
  // const response = await client.responses.create({
  //     model: "gpt-4o",
  //     input: "Write a one-sentence bedtime story about a unicorn.",
  // });
  
  // console.log(response.output_text);
  
  const handleAIRequest = async() => {
    //const response = 
    // await client.responses.create({
    //   model: "gpt-4o",
    //   input: "Write a one-sentence bedtime story about a ghost."
    // }).then((data)=>{
    //   console.log(response);
    // });
    const template = `Nutrition value of ${thoughts} and it's sustainability to produce eco friendly product. Make a short summary of this in a readable format. Make it sounds like you are giving statement, please dont ask me an open ended question at the end.`;

  try{
    const result = await model.generateContent(thoughts);
    const response = await result.response;
 console.log(response);
 console.log(response.text());
 setSentiment(response.text());
  }catch(error){
    console.log(error);
  }finally{
    console.log("Finally");
  }
    
  }


  return (
    <>

    <textarea 
    onChange={(e) => setThoughts(e.target.value)  }
    name="saying" id="" placeholder="What do you think?">

    </textarea>

    <button onClick={handleAIRequest}>Submit</button>

    <div>
      {sentiment !== "" ? 
        <h5><p>{sentiment}</p></h5>
        :
        null
      }
    </div>

      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App

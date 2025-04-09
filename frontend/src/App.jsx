import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OpenAI from "openai";

import { GoogleGenerativeAI } from '@google/generative-ai';

function App() {
 // const client = new OpenAI({ apiKey: API_KEY, dangerouslyAllowBrowser: true  });

  const genAI = new GoogleGenerativeAI(GEN_API);
  const model = genAI.getGenerativeModel({model:"gemini-1.5-flash"});
  
  
  const [count, setCount] = useState(0)
  const [thoughts, setThoughts] = useState("");
  const [sentiment, setSentiment] = useState("");



  
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

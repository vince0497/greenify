import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import OpenAI from "openai";
import {usePromptStore } from "../store/prompt.js"
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import { Box, useColorModeValue } from '@chakra-ui/react';
function App() {
  
  const {getPrompt} = usePromptStore();
  // const [count, setCount] = useState(0)
  const [thoughts, setThoughts] = useState("");
  const [barcode, setBarcode] = useState("");
  const [sentiment, setSentiment] = useState("");




  
  const handleAIRequest = async() => {

    const template = `Nutrition value of ${thoughts} and it's sustainability to produce eco friendly product. Make a short summary of this in a readable format. Make it sounds like you are giving statement, please dont ask me an open ended question at the end.`;
    const barcode = "4800011133478"
  try{
    await getPrompt(template, barcode)
  }catch(error){
    console.log(error);
  }finally{
    console.log("Finally");
  }
    
  }

//  console.log(barcode)

  return (
    <>

    {/* <textarea name="bc" id="" placeholder="Barcode"
    onChange={(e) => setBarcode(e.target.value)}
    >

    </textarea>

    <textarea 
    onChange={(e) => setThoughts(e.target.value)  }
    name="saying" id="" placeholder="Whats?">

    </textarea>

    <button onClick={handleAIRequest}>Submit</button>

    <div>
      {sentiment !== "" ? 
        <h5><p>{sentiment}</p></h5>
        :
        null
      }
    </div> */}

    <Box minH={"100vh"} bg={useColorModeValue("gray.300", "gray.900")}>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/barcode-search" />
      </Routes>
    </Box>

   
    </>
  )
}

export default App

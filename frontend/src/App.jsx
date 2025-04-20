import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import OpenAI from "openai";
import {usePromptStore } from "../store/prompt.js"
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import { Box, useColorModeValue } from '@chakra-ui/react';
import HomePrompts from './pages/HomePrompts.jsx';

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



    <Box minH={"100vh"} bg={useColorModeValue("gray.300", "gray.900")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePrompts />} />
        {/* <Route path="/barcode-search" element={}/> */}
      </Routes>
    </Box>

   
    </>
  )
}

export default App

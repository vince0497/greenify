import { Container, Button,Textarea,Box,useColorModeValue, VStack, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from 'react'
import {usePromptStore } from "../../store/prompt"

const HomePrompts = () => {
  const bg = useColorModeValue("white","gray.800");
      const {getPrompt, prompts} = usePromptStore();
      // const [count, setCount] = useState(0)
      const [thoughts, setThoughts] = useState("");
      const [barcode, setBarcode] = useState("");
      const [sentiment, setSentiment] = useState("");
    
      useEffect(()=>{
        console.log("Hello ")
        console.log(prompts)
      }
      ,[getPrompt]);


    const handleAIRequest = async() => {

        const template = `Nutrition value of ${thoughts} and it's sustainability to produce eco friendly product. Make a short summary of this in a readable format. Make it sounds like you are giving statement, please dont ask me an open ended question at the end.`;
        const barcode = "4800011133478"
      try{
       
        const res = await getPrompt(template, barcode)
        const promptResponse = res.data.prompt.candidates[0].content.parts[0];
        setSentiment(promptResponse.text)
      
      }catch(error){
        console.log(error);
      }finally{
        console.log("Finally");
      }
        
    }
    

    return (
      <Container maxW={"container.sm"} >
        <VStack spacing={0} alignItems={"center"} > 
       
              <Heading as="h3" size={"2xl"} textAlign={"center"} mb={8}>
                Hello We Are Greenify!
              </Heading>

              <Text as='cite'>Your an eco-friendly advisor!</Text>

              <Box w={"full"}
              bg={useColorModeValue("white","gray.900")}
              p={6} rounded={"lg"} shadow={"md"}
              >
              <VStack spacing={4}>
              <Textarea name="bc" id="" placeholder="Barcode"
                onChange={(e) => setBarcode(e.target.value)}
                value={barcode} size='sm'
                />

                <Textarea 
                onChange={(e) => setThoughts(e.target.value)  }
                value={thoughts}
                name="saying" id="" placeholder="Whats food you want to ask?" 
                size='sm'
                />


                <Button onClick={handleAIRequest}
                colorScheme="cyan" w="full" 
                >Get The Nutrional Value</Button>

                <Text as='em'>
                {sentiment !== "" ? 
                    <h5><p>{sentiment}</p></h5>
                    :
                    null
                }
                </Text> 
                </VStack>

                </Box>
              

        </VStack>
        </Container>
    );

}

export default HomePrompts;
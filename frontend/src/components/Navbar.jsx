import { Button, Container, Flex, HStack,VStack, Stack,Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {PlusSquareIcon} from "@chakra-ui/icons"
import { IoMoon } from "react-icons/io5"
import { LuSun } from "react-icons/lu"

const Navbar = () => {

    const {colorMode, toggleColorMode} = useColorMode();

    return (

        <Container maxW={"1140px"}
        // px={4}
        colorScheme='teal' 
    
        >
            <Flex h={16} alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base:"column",
                sm: "row"
            }}
            >
                <Text
                fontSize={{base:"22", sm:"28"}}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                textAlign={"center"}
                bgGradient={"linear(to-r,green.500,cyan.500)"}
                bgClip={"text"}
             
                >

                    <Link    to={"/"}>
                    Greenify
                    </Link>
                    
                </Text>

                <Text
                bgClip={"text"}
                bgGradient={"linear(to-r,cyan.400, blue.500)"}
                >
                   Love, Save, Preserve
                </Text>
                <Stack   direction='row' >
                
                    
                    {/* <Link> */}
                        <Button size="xs">
                            <PlusSquareIcon fontSize={10} />
                        </Button>
                    {/* </Link> */}

                    <Button onClick={toggleColorMode}  size="xs">
                        {colorMode === "light" ? <IoMoon /> : <LuSun  />}
                    </Button>
                </Stack>
            </Flex>

        </Container>

    );

}//end of navbar


export default Navbar;
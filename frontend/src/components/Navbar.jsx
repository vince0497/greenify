import { Button, Container, Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {PlusSquareIcon} from "@chakra-ui/icons"
import { IoMoon } from "react-icons/io5"
import { LuSun } from "react-icons/lu"

const Navbar = () => {

    const {colorMode, toggleColorMode} = useColorMode();

    return (

        <Container maxW={"1140px"}
        px={4}
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

                    <Link to={"/"}>
                    Greenify
                    </Link>
                    
                </Text>

                <Text
                bgClip={"text"}
                bgGradient={"linear(to-r,cyan.400, blue.500)"}
                >
                   Love, Save, Preserve
                </Text>
                <HStack>
                    <Link>
                        <Button>
                            <PlusSquareIcon fontSize={20} />
                        </Button>
                    </Link>

                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
                    </Button>
                </HStack>
            </Flex>

        </Container>

    );

}//end of navbar


export default Navbar;
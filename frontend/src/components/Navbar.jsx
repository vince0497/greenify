import { Button, Container, Flex, HStack,VStack, Stack,Text, useColorMode, Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, PlusSquareIcon, RepeatIcon} from "@chakra-ui/icons"
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
                 {/* <Stack   direction='row' >
                
                    
                     <Link> 
                        <Button size="xs">
                            <PlusSquareIcon fontSize={10} />
                        </Button>
                    </Link> 

                    <Button onClick={toggleColorMode}  size="xs">
                        {colorMode === "light" ? <IoMoon /> : <LuSun  />}
                    </Button>
                </Stack>  */}

                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'
                    />
                    <MenuList>
                        <MenuItem icon={colorMode === "light" ? <IoMoon /> : <LuSun  />} onClick={toggleColorMode} >
                             {colorMode === "light" ?  "Dark Mode" : "Light Mode" }
                        </MenuItem>
                        {/* <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
                        New Window
                        </MenuItem>
                        <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
                        Open Closed Tab
                        </MenuItem>
                        <MenuItem icon={<EditIcon />} command='⌘O'>
                        Open File...
                        </MenuItem> */}
                    </MenuList>
                    </Menu>
            </Flex>

        </Container>

    );

}//end of navbar


export default Navbar;
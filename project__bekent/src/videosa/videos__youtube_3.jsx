import { Avatar, Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Radio, RadioGroup, Stack, Text, Tooltip, WrapItem, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Headers__video from "./header__videos";



export default function Videos_3() {  

    let [Bek,setBek] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos/")
        .then(posts => posts.json())
        .then(poster => setBek(poster))
    },[])


    let [PlsLike, setPlsLike] = useState(true)
    let [MinLike, setMinLoke] = useState(true)
    let [Pls, setPls] = useState(0)
    let [Min, setMin] = useState(0)


    function Pls__btn() {   
        if (PlsLike == true) {
            setPls(+1)
            setMin(0)
            setMinLoke(true)
            setPlsLike(false)
        }
        else{
            setPls(0)
            setPlsLike(true)
        }
    }

    function Min__btn() {   
        if (MinLike == true) {
            setMin(+1)
            setPls(0)
            setPlsLike(true)
            setMinLoke(false)
        }
        else{
            setMin(0)
            setMinLoke(true)
        }
    }
    

    return(
        <>
        <Headers__video/>
        {Bek.slice(2,3).map((Cart)=>{
            return(
                <Box m={"60px auto"} borderRadius={"10px"} w={"100%"} p={{base:"0 0", md:"20px", xl:"0 100px"}} h={"100vh"}>
                    <Box w={"100%"} h={"850px"} >
                        <img className="img__youtebe_1" key={Cart.id} src={Cart.url} alt=""/>
                    </Box>
                    <Box display={"flex"} h={"10%"} alignItems={"center"} justifyContent={"space-between"} p={"15px"}>
                        <Box display={"flex"} w={"800px"}>
                            <WrapItem >
                                <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                            </WrapItem>
                            <Text p={"0 30px 0"} w={"100%"} key={"Cart.id"}>{Cart.title}</Text>
                        </Box>
                        <Box position={"relative"} w={"160px"} bg={"gray.100"} overflow={"hidden"} borderRadius={"10px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                            <Box onClick={()=> Pls__btn()} p={"10px"} bg={""} display={"flex"} justifyContent={"space-between"} alignItems={"center"} w={"50%"}>
                                <img src="https://cdn-icons-png.flaticon.com/512/126/126473.png" width={"30px"} alt="" />
                                <Text fontSize={"20px"} m={"0 5px 0"}>{Pls}</Text>
                            </Box>
                            <Box w={"2px"} position={"absolute"} left={"50%"} h={"50px"} bg={"blackAlpha.400"}/>
                            <Box onClick={()=> Min__btn()} p={"10px"} className="Like" display={"flex"} justifyContent={"space-between"} alignItems={"center"} w={"50%"}>
                                <img src="https://cdn-icons-png.flaticon.com/512/126/126473.png" width={"30px"} alt="" />
                                <Text className="Like" fontSize={"20px"} m={"0 5px 0"}>{Min}</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            )
        })}
        </>
    )
}
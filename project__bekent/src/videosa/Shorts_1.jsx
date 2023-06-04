import { Avatar, Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Input, Radio, RadioGroup, Stack, Text, Tooltip, WrapItem, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import home from "../img/Без названия.png"
import shorts from "../img/viber.png"
import potpiski from "../img/3741721.png"
import bibliateka from "../img/5942620.png"
import history from "../img/873051-200.png"
import subscy from "../img/image.png"
import pojje from "../img/simple+and+minimal+line+icons+clock-1324450514352355098.png"
import Like from "../img/like.png"
import ogon from "../img/2126650-200.png"
import music from "../img/6020153.png"
import Live from "../img/live.png"
import Новости from "../img/Новости.png"
import Спорт from "../img/Спорт.png"
import lampa from "../img/lampa.png"
import ojejda from "../img/ojejda.png"
import Cart from "../header/cart";
import { Link } from "react-router-dom";
import Headers__video from "./header__videos";


export default function Shor_1() {

    let [Son,setSon] = useState(true)

    

    let [Bek,setBek] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos/")
        .then(posts => posts.json())
        .then(poster => setBek(poster))
    },[])

    return(
        <>
        <Box className="Shors__video" zIndex={4}>
            <Headers__video/>
        </Box>
        {Bek.slice(1,2).map((Cart)=>{
            return(
                <Box m={{base:"100px 0 0 5%", lg:"100px 0 0 15%", xl:"100px 0 0 25%", "2xl":'100px 0 0 30%'}} bg={"gray.100"} overflow={"hidden"} borderRadius={"10px"} w={{base:"90%", lg:"70%", xl:"50%", "2xl":'40%'}} h={"90vh"}>
                     <Box w={"100%"} h={"100%"} >
                        <img className="img__youtebe_1" key={Cart.id} src={Cart.url} alt=""/>
                    </Box>

                    <Box position={"relative"} bottom={"100px"} display={"flex"} h={"10%"} alignItems={"center"} p={"15px"}>
                    <WrapItem >
                        <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                    </WrapItem>
                    <Text p={"0 30px 0"} color={"whatsapp.100"} w={"62%"} key={"Cart.id"}>{Cart.title}</Text>
                    </Box>
                </Box>
            )
        })}
        </>
    )    
}
import { Box, Button, Flex, Grid, GridItem } from "@chakra-ui/react"
import Card from "./Card"
import ShortCart from "./Short"
import { CloseIcon } from '@chakra-ui/icons'
import { useState } from "react"
import { Link } from "react-router-dom"


function Main() {


    let [Shorts,setShorts] = useState(true)


    return(
        <Box w={{base:"100%", "2xl":"87%"}} m={{base:"10px 0 0 0%", "2xl":"10px 0 0 12.5%"}} position={"relative"} top={"90px"} p={"0 10px"} as="main">
            <Box display={{base:"none", lg:"inline-block"}} p={"0 0 10px 0"} bg={"white"} w={"100%"} className="blok_nav">
                <div className="item__mini">
                    <p>All</p>
                </div>
                <div className="item__mini">
                    <p>music</p>
                </div>
                <div className="item__mini">
                    <p>online</p>
                </div>
                <div className="item__mini">
                    <p>online games</p>
                </div>
                <div className="item__mini">
                    <p>phonk</p>
                </div>
                <div className="item__mini">
                    <p>all on my</p>
                </div>
                <div className="item__mini">
                    <p>futbol</p>
                </div>
                <div className="item__mini">
                    <p>capcut</p>
                </div>
            </Box>
            <Grid mt={"30px"} mb={"35px"} templateColumns={{base:'repeat(1, 1fr)', md:'repeat(2, 1fr)', lg:'repeat(3, 1fr)', xl:'repeat(4, 1fr)'}} gap={6}>
                <Card/>
            </Grid>


            <Box display={{base:"none", xl:"block"}} as={"span"}>
            <Box w={"100%"} h={"5px"} bg={"#afafaf"} opacity={"0.5"} mb={"15px"}/>
            <Flex alignItems={"center"} justifyContent={Shorts ? "space-between":""} mb={"10px"}>
                {Shorts ? <img src="https://seeklogo.com/images/Y/youtube-shorts-logo-16273D1063-seeklogo.com.png" width={"90px"} alt="" />:"Раздел скрыт на 30 дн."}  
                <Button m={"0 0 0 10px"}  onClick={()=> Shorts ? setShorts(false):setShorts(true)} variant='ghost'>
                    {Shorts ? <CloseIcon/>:"Отменить"}
                </Button>
            </Flex>

            <Flex alignItems={"center"} justifyContent={"space-between"} display={Shorts ? "flex":"none"}>
             <ShortCart/>
            </Flex>
            </Box>

            <Box w={"100%"} h={"5px"} bg={"#afafaf"} opacity={"0.5"} mt={"15px"}/>


            <Grid mt={"30px"} mb={"35px"} templateColumns={{base:'repeat(1, 1fr)', md:'repeat(2, 1fr)', lg:'repeat(3, 1fr)', xl:'repeat(4, 1fr)'}} gap={6}>
                <Card/>
            </Grid>
        </Box>
    )
}
export default Main
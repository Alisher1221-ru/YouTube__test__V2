import { Box, Flex, GridItem, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

 

export default function ShortCart() {

    let [Bek,setBek] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos/")
        .then(posts => posts.json())
        .then(poster => setBek(poster))
    },[])

    return(
        <>
            {Bek.slice(0,4).map((Card)=>{
            return(
                <Link to={`Shorts`}>
                    <GridItem m={"0 auto"} borderRadius={"10px"} bg={"rgb(245, 245, 245)"} overflow={"hidden"} w={"300px"} h={"420px"}>
                        <Box w={"100%"} h={"100%"} >
                            <img className="img__youtebe" key={Card.id} src={Card.url} alt=""/>
                            <Text p={"5px"} key={Card.id}>{Card.title}</Text>
                        </Box>
                    </GridItem>
                </Link>
                )
            })}
        </>
    )
}
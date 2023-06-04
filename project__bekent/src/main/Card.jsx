import { Box, GridItem, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function Card() {
    
    let [Bek,setBek] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos/")
        .then(posts => posts.json())
        .then(poster => setBek(poster))
    },[])

    return(
        <>
        {Bek.slice(0,8).map((Cart)=>{
            return(
                <Link to={`/Videos/${Cart.id}`}>
                    <GridItem w='100%' h='400px' bg="rgb(245, 245, 245)" overflow={"hidden"} borderRadius={"10px"}>
                        <Box w={"100%"} h={"400px"} >
                            <img className="img__youtebe" key={Cart.id} src={Cart.url} alt=""/>
                            <Text p={"5px"} key={Cart.id}>{Cart.title}</Text>
                        </Box>
                    </GridItem>
                </Link>
            )
        })}
        </>
    )
}
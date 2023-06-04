import { Flex } from "@chakra-ui/react";

export default function Cart(props) {
    return(
        <Flex alignItems={"center"} mb={"15px"} w={"100%"} borderRadius={"5px"} cursor={"pointer"}>
            <img className="CartImg" src={props.img} width={"40px"} height={"40px"} alt=""/>
            <p className="CartP">{props.title}</p>
        </Flex>
    )
}
import { Flex, Input, Tooltip } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Avatar } from '@chakra-ui/react'
import { WrapItem } from "@chakra-ui/react";
import { useState } from "react";
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
import Cart from "./cart";
import { Link } from "react-router-dom";
import Headers__video from "../videosa/header__videos";




function Header() {
    let [Son,setSon] = useState(true)
    return(
        <>
        <Box w={"12%"} display={{base:"none", "2xl":"inline-block"}} position={"fixed"} top={"71px"} bottom={"0"} overflow={"hidden"} p={"0 10px 0 15px"} transition={"all 0.2s ease"} zIndex={4} as="section">
            <Box>
                <Link to={"/"}><Cart img={home} title="Главная"/></Link>
                <Link to={"/Shorts"}><Cart img={shorts} title="Shorts"/></Link>
                <Cart img={potpiski} title="Подписки"/>
                <Box as="span" display={Son ? "inline-blok" : "none"}>
                <hr />
                <br />
                <Cart img={bibliateka} title="Библиотека"/>
                <Cart img={history} title="История"/>
                <Cart img={subscy} title="Ваши видео"/>
                <Cart img={pojje} title="Смотреть позже"/>
                <Cart img={Like} title="Понравившиеся"/>
                <hr />
                <br />
                <p className="selectP">Навигатор</p>
                <Cart img={ogon} title="В тренде"/>
                <Cart img={music} title="Музыка"/>
                <Cart img={Live} title="Трансляции"/>
                <Cart img={Новости} title="Новости"/>
                <Cart img={Спорт} title="Спорт"/>
                <Cart img={lampa} title="Обучение"/>
                <Cart img={ojejda} title="Мода и красота"/>
                <hr />
                <br />
                <p className="p_text">О сервисе Прессе <br /> Авторские права <br /> Связаться с нами Авторам <br /> Рекламодателям <br /> Разработчикам <br /> <br /> Условия использования <br /> Конфиденциальность <br /> Правила и безопасность <br /> Как работает YouTube <br /> Тестирование новых</p>
                <p className="text__rec">© 2023 Google LLC</p>
                </Box>
            </Box>
        </Box>
        <Box as="header" display={{base:'flex', "2xl":"none"}}>
            <Headers__video/>
        </Box>
        <Box as="header" display={{base:'none', "2xl":'inline-block'}}>
            <Box className="header__menu" as="div"> 
            <div className="menu__header">
                <div onClick={()=> {Son ? setSon(false) : setSon(true)}} className="burger__manu">
                    <div className="linia__burger_1"></div>
                    <div className="linia__burger_2"></div>
                    <div className="linia__burger_3"></div>
                </div>
                <Box display={{base:"none", md:"inline-block"}}>
                <Link to={"/"}><img className="youtube" src="https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-png.png" width={"100px"} alt=""/></Link>
                </Box>
            </div>
            <Flex w={{base:"380px",md:"450px", lg:"650px"}} alignItems={"center"} justifyContent={"space-between"}>
            <div className="menu__search">
                <Input type="text" placeholder="search"/>
                <Tooltip hasArrow label='Search' bg='gray.300' color='blackAlpha.600'>
                <Box>
                    <img src="https://cdn-icons-png.flaticon.com/512/54/54481.png" width={"20px"} alt=""/>
                </Box>
                </Tooltip>
            </div>
        <Box display={{base:"none", md:"block"}} w={"70px"}>
            <Tooltip  hasArrow label='Search places' bg='gray.300' color='blackAlpha.600'>
                <img className="img__micra" src="https://cdn4.iconfinder.com/data/icons/multimedia-icons-5/100/multimedia_microphone-13-512.png" width={"40px"} alt="" />
            </Tooltip>
        </Box>
            </Flex>
            <div className="icons">
            <Tooltip hasArrow label='notification' bg='gray.300' color='blackAlpha.600'>
                <img src="https://cdn-icons-png.flaticon.com/512/107/107822.png" width={"40px"} alt=""/>
            </Tooltip>
            <WrapItem>
                <Avatar cursor="pointer" size="sm" name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
            </WrapItem>
            </div>
            </Box>
        </Box>
        </>
    )
}
export default Header

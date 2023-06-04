import { Route, Routes } from "react-router-dom";
import Homes from "./main/Homes"
import Videos from "./videosa/videos__youtube";
import Videos_2 from "./videosa/videos__youtube_2";
import Videos_3 from "./videosa/videos__youtube_3";
import Videos_4 from "./videosa/videos__youtube_4";
import Videos_5 from "./videosa/videos__youtube_5";
import Videos_6 from "./videosa/videos__youtube_6";
import Videos_7 from "./videosa/videos__youtube_7";
import Videos_8 from "./videosa/videos__youtube_8";
import Shor_1 from "./videosa/Shorts_1";


function Home() {
    return(
        <Routes>
            <Route path="/" element={<Homes/>}/>
            <Route path="/Videos/1" element={<Videos/>}/>
            <Route path="/Videos/2" element={<Videos_2/>}/>
            <Route path="/Videos/3" element={<Videos_3/>}/>
            <Route path="/Videos/4" element={<Videos_4/>}/>
            <Route path="/Videos/5" element={<Videos_5/>}/>
            <Route path="/Videos/6" element={<Videos_6/>}/>
            <Route path="/Videos/7" element={<Videos_7/>}/>
            <Route path="/Videos/8" element={<Videos_8/>}/>
            <Route path="/Shorts" element={<Shor_1/>}/>
        </Routes>
    )
}
export default Home
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { GlobalStyle } from "./Global";

export function Routing(){
    return(
    <BrowserRouter>
    <GlobalStyle />
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>
    )
}

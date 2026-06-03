import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./Pages/HomePage";
import { Comic } from "./Pages/ComicPage";
import { Integrantes } from "./Pages/IntegrantesPage";
import { Tienda } from "./Pages/TiendaPage";


export const App = () => {

return (

<BrowserRouter>

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/comic" element={<Comic/>}/>

<Route path="/integrantes" element={<Integrantes/>}/>

<Route path="/tienda" element={<Tienda/>}/>

</Routes>

</BrowserRouter>

)

}
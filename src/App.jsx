import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css" 
import { HomePage } from "./Pages/HomePage";
import { ComicPage } from "./Pages/ComicPage";
import { IntegrantesPage } from "./Pages/IntegrantesPage";
import { TiendaPage } from "./Pages/TiendaPage";

export const App = () => {

return (

<BrowserRouter>

<Routes>

<Route path="/" element={<HomePage/>}/>

<Route path="/comic" element={<ComicPage/>}/>

<Route path="/integrantes" element={<IntegrantesPage/>}/>

<Route path="/tienda" element={<TiendaPage/>}/>

</Routes>

</BrowserRouter>

)

}
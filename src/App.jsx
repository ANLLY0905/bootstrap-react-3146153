import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css" 
import { HomePage } from "./Pages/HomePage";
import { ComicPage } from "./Pages/ComicPage";
import { ComicHomePage } from "./Pages/ComicHomePage";
import { Capitulo1Page } from "./Pages/Capitulo1Page";
import { Capitulo2Page } from "./Pages/Capitulo2Page";
import { IntegrantesPage } from "./Pages/IntegrantesPage";
import { TiendaPage } from "./Pages/TiendaPage";

export const App = () => {    

return (

<BrowserRouter>

<Routes>

<Route path="/" element={<HomePage/>}/>

<Route path="/comic" element={<ComicPage/>}/>

<Route path="/comic/portada" element={<ComicHomePage />} />

<Route path="/comic/capitulo-1" element={<Capitulo1Page />} />

<Route path="/comic/capitulo-2" element={<Capitulo2Page />} />

<Route path="/integrantes" element={<IntegrantesPage/>}/>

<Route path="/tienda" element={<TiendaPage/>}/>

</Routes>

</BrowserRouter>

)

}
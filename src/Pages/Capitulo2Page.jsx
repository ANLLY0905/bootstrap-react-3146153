import { ComicViewer } from "../Componentes/ComicViewer";
import { Escena6 } from "../Componentes/Escena6";
import { Escena7 } from "../Componentes/Escena7";
import { Escena8 } from "../Componentes/Escena8";
import { Escena9 } from "../Componentes/Escena9";



const scenes = [
  { id: 1, title: "Escena 6", component: <Escena6 /> },
  { id: 2, title: "Escena 7", component: <Escena7 /> },
  { id: 3, title: "Escena 8", component: <Escena8 /> },
  { id: 4, title: "Escena 9", component: <Escena9 /> },


];

export const Capitulo2Page = () => (
  <ComicViewer chapterNumber={2} chapterTitle="La Cacería" scenes={scenes} nextChapterPath={null} />
);
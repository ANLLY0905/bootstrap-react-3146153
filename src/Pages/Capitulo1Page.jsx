import { ComicViewer } from "../Componentes/ComicViewer";
import { Escena1 } from "../Componentes/Escena1";
import { Escena2 } from "../Componentes/Escena2";
import { Escena3 } from "../Componentes/Escena3";
import { Escena4 } from "../Componentes/Escena4";
import { Escena5 } from "../Componentes/Escena5";



const scenes = [
  { id: 1, title: "Escena 1", component: <Escena1 /> },
  { id: 2, title: "Escena 2", component: <Escena2 /> },
  { id: 3, title: "Escena 3", component: <Escena3 /> },
  { id: 4, title: "Escena 4", component: <Escena4 /> },
  { id: 5, title: "Escena 5", component: <Escena5 /> },
];

export const Capitulo1Page = () => (
  <ComicViewer chapterNumber={1} chapterTitle="El Origen" scenes={scenes} nextChapterPath="/comic/capitulo-2" />
);
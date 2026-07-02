import { ComicViewer } from "../Componentes/ComicViewer";
import { Escena1 } from "../Componentes/Escena1";
import { Escena2 } from "../Componentes/Escena2";



const scenes = [
  { id: 1, title: "Escena 1", component: <Escena1 /> },
  { id: 2, title: "Escena 2", component: <Escena2 /> },


  { id: 3, title: "Escena 3 — Primera alerta", bg: "linear-gradient(135deg, #1a0a00 0%, #0a0a0a 100%)", narration: "Las alarmas suenan en toda la ciudad. Algo se ha escapado.", dialogue: [{ speaker: "Noticiero", text: "Ciudadanos, permanezcan en sus hogares. Se reportan incidentes en el sector norte." }, { speaker: "Emilia", text: "No. Ya es demasiado tarde." }] },
  { id: 4, title: "Escena 4 — El primer encuentro", bg: "linear-gradient(160deg, #0a0000 0%, #0a0a1a 100%)", narration: "En la oscuridad del pasillo, Kian escucha algo. No respira. No se mueve.", dialogue: [{ speaker: "Kian", text: "..." }] },
  { id: 5, title: "Escena 5 — Cara a cara", bg: "linear-gradient(135deg, #1a0000 0%, #0f0f0f 100%)", narration: "El Drekxon gira la cabeza. Sus ojos son blancos, ciegos. Pero algo lo guía hacia él.", dialogue: [{ speaker: "Kian", text: "No hace sonido. No hace sonido. No hace sonido..." }] },
  { id: 6, title: "Escena 6 — El escape", bg: "linear-gradient(135deg, #000a1a 0%, #1a0000 100%)", narration: "Kian corre. El Drekxon lo sigue por cada vibración del suelo. Afuera, la ciudad arde.", dialogue: [{ speaker: "Emilia", text: "¡Kian! Por aquí, rápido." }, { speaker: "Kian", text: "¿Cuántos hay?" }, { speaker: "Emilia", text: "No lo sabemos. Aún no lo sabemos." }] },
];

export const Capitulo1Page = () => (
  <ComicViewer chapterNumber={1} chapterTitle="El Origen" scenes={scenes} nextChapterPath="/comic/capitulo-2" />
);
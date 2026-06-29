import { ComicViewer } from "../Componentes/ComicViewer";

const scenes = [
  { id: 1, title: "Escena 1 — Ciudad fantasma", bg: "linear-gradient(135deg, #0a0a0a 0%, #1a1000 100%)", narration: "72 horas después. Las calles vacías susurran con el viento. Los Drekxon han aprendido a esperar.", dialogue: [] },
  { id: 2, title: "Escena 2 — El refugio", bg: "linear-gradient(135deg, #001015 0%, #0a0a0a 100%)", narration: "Kian y Emilia encuentran un grupo de sobrevivientes en un sótano sellado.", dialogue: [{ speaker: "Sobreviviente", text: "¿Cuánto tiempo más podemos quedarnos aquí?" }, { speaker: "Kian", text: "El tiempo que sea necesario." }] },
  { id: 3, title: "Escena 3 — La transmisión", bg: "linear-gradient(135deg, #001a05 0%, #0a0a00 100%)", narration: "Una señal de radio interrumpe el silencio. Alguien sabe lo que crearon.", dialogue: [{ speaker: "Voz", text: "Esto no es una invasión. Es una limpieza. Y pueden sobrevivir... si cooperan." }, { speaker: "Emilia", text: "Conozco esa voz." }] },
  { id: 4, title: "Escena 4 — La traición", bg: "linear-gradient(160deg, #1a0000 0%, #0a0a0a 100%)", narration: "Alguien en el grupo marca su posición. Los Drekxon se acercan.", dialogue: [{ speaker: "Kian", text: "Alguien nos delató. ¡Todos moverse, ya!" }] },
  { id: 5, title: "Escena 5 — La cacería", bg: "linear-gradient(135deg, #0f0000 0%, #0a0a1a 100%)", narration: "Los Drekxon no ven. Sienten cada paso, cada latido, cada respiración agitada.", dialogue: [{ speaker: "Emilia", text: "Hay que dividirse. Es la única forma." }, { speaker: "Kian", text: "No te voy a dejar sola." }, { speaker: "Emilia", text: "No tienes opción." }] },
  { id: 6, title: "Escena 6 — El precio", bg: "linear-gradient(135deg, #0a0a0a 0%, #1a0000 100%)", narration: "Kian escapa. Emilia no llega. En el silencio que sigue, él entiende que esta guerra recién empieza.", dialogue: [{ speaker: "Kian", text: "Voy a desmantelar todo lo que construyeron. Todo." }] },
];

export const Capitulo2Page = () => (
  <ComicViewer chapterNumber={2} chapterTitle="La Cacería" scenes={scenes} nextChapterPath={null} />
);
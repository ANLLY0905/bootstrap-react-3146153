import "../stylesheets/Escenas.css";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";

import fondoSvg from "../assets/escena7/fondo4.svg";
import arbolSvg from "../assets/escena7/arbol.svg";
import humoJson from "../assets/escena7/humo.json";
import pantallasJson from "../assets/escena7/pantallas.json";
import audioAlarma from "../assets/escena7/alarma.mp3";
import audioVoz from "../assets/escena7/audio-alarma.mp3";

export const Escena7 = () => {
  const humoRef = useRef(null);
  const pantallasRef = useRef(null);

  const audAlarma = useRef(new Audio(audioAlarma));
  const audVoz = useRef(new Audio(audioVoz));

  useEffect(() => {
    lottie.loadAnimation({
      container: humoRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: humoJson,
    });

    lottie.loadAnimation({
      container: pantallasRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: pantallasJson,
    });

    // Cuando termina la alarma, suena la voz
    audAlarma.current.addEventListener("ended", () => {
      audVoz.current.play();
    });

    return () => {
      lottie.destroy();
    };
  }, []);

  // P1 — dispara alarma, luego voz automáticamente
  const handleAlarma = () => {
    audAlarma.current.currentTime = 0;
    audAlarma.current.play();
  };

  return (
    <div
      className="container7"
      style={{ backgroundImage: `url(${fondoSvg})` }}
    >
      {/* Humo — loop autoplay */}
      <div id="humo" ref={humoRef} />

      {/* Árbol al frente */}
      <img src={arbolSvg} id="arbolFrente" alt="" />

      {/* Pantallas — loop autoplay */}
      <div id="pantallas" ref={pantallasRef} />

      {/* P1 — alarma */}
      <button id="btnAlarma" className="btn1" onClick={handleAlarma}>1</button>
    </div>
  );
};
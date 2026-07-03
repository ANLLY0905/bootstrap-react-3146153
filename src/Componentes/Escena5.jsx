import "../stylesheets/Escenas.css";
import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

import fondoSvg from "../assets/escena5/fondo_2.svg";
import cartuchoImg from "../assets/escena5/cartucho.png";
import puertaJson from "../assets/escena5/puerta.json";
import emiliaJson from "../assets/escena5/emilia.json";
import audioCartucho from "../assets/escena5/audio.mp3";

export const Escena5 = () => {
  const puertaRef = useRef(null);
  const emiliaRef = useRef(null);
  const [cartVisible, setCartVisible] = useState(false);

  const audCart = useRef(new Audio(audioCartucho));

  useEffect(() => {
    const puertaAni = lottie.loadAnimation({
      container: puertaRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: puertaJson,
    });

    const emiliaAni = lottie.loadAnimation({
      container: emiliaRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: emiliaJson,
    });

    puertaRef.current._lottie = puertaAni;
    emiliaRef.current._lottie = emiliaAni;

    return () => {
      puertaAni.destroy();
      emiliaAni.destroy();
    };
  }, []);

  // P1 — toggle cartucho + audio
  const handleCartucho = () => {
    const visible = !cartVisible;
    setCartVisible(visible);
    if (visible) {
      audCart.current.currentTime = 0;
      audCart.current.play();
    } else {
      audCart.current.pause();
      audCart.current.currentTime = 0;
    }
  };

  // P2 — abrir puerta (segmento 1→23)
  const handleAbrirPuerta = () => {
    puertaRef.current._lottie?.stop();
    puertaRef.current._lottie?.playSegments([1, 23], true);
  };

  // P4 — cerrar puerta (segmento 23→100)
  const handleCerrarPuerta = () => {
    puertaRef.current._lottie?.stop();
    puertaRef.current._lottie?.playSegments([23, 100], true);
  };

  // Click en Emilia
  const handleEmilia = () => {
    emiliaRef.current._lottie?.stop();
    emiliaRef.current._lottie?.play();
  };

  return (
    <div
      className="container5"
      style={{ backgroundImage: `url(${fondoSvg})` }}
    >
      {/* Botón P1 — cartucho */}
      <button id="btnMostrar" className="btn1" onClick={handleCartucho}>1</button>

      {/* Cartucho */}
     <div id="cartucho5" style={{ display: cartVisible ? "block" : "none" }}>
  <img src={cartuchoImg} alt="Cartucho" />
</div>

      {/* Puerta Lottie */}
      <div id="puerta1" ref={puertaRef} />

      {/* Botón P2 — abrir puerta */}
      <button className="btn1" id="btn-puerta" onClick={handleAbrirPuerta}>2</button>

      {/* Botón P4 — cerrar puerta */}
      <button className="btn1" id="btn2-puerta" onClick={handleCerrarPuerta}>4</button>

      {/* Emilia Lottie — click directo */}
      <div id="emilia2" ref={emiliaRef} onClick={handleEmilia} />
    </div>
  );
};
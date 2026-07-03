import "../stylesheets/Escenas.css";
import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

import fondoSvg from "../assets/escena6/fondo.svg";
import dialogoImg from "../assets/escena6/dialogo1.png";
import puertaJson from "../assets/escena6/puerta-venta.json";
import barraJson from "../assets/escena6/barra.json";
import frenteJson from "../assets/escena6/frente.json";
import audioCartucho from "../assets/escena6/audio.mp3";

export const Escena6 = () => {
  const puertaRef = useRef(null);
  const barraRef = useRef(null);
  const frenteRef = useRef(null);
  const [cartVisible, setCartVisible] = useState(false);

  const audCart = useRef(new Audio(audioCartucho));

  useEffect(() => {
    const puertaAni = lottie.loadAnimation({
      container: puertaRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: puertaJson,
    });

    const barraAni = lottie.loadAnimation({
      container: barraRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: barraJson,
    });

    const frenteAni = lottie.loadAnimation({
      container: frenteRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: frenteJson,
    });

    puertaRef.current._lottie = puertaAni;
    barraRef.current._lottie = barraAni;
    frenteRef.current._lottie = frenteAni;

    return () => {
      puertaAni.destroy();
      barraAni.destroy();
      frenteAni.destroy();
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

  // Click en puerta — toggle play/stop
  const handlePuerta = () => {
    puertaRef.current._lottie?.stop();
    puertaRef.current._lottie?.play();
  };

  // boton-barra invisible — dispara barra
  const handleBarra = () => {
    barraRef.current._lottie?.stop();
    barraRef.current._lottie?.play();
  };

  // P2 — frente
  const handleFrente = () => {
    frenteRef.current._lottie?.stop();
    frenteRef.current._lottie?.play();
  };

  return (
    <div
      className="container6"
      style={{ backgroundImage: `url(${fondoSvg})` }}
    >
      {/* P1 — cartucho */}
      <button id="btnMostrar" className="btn1" onClick={handleCartucho}>1</button>

    
      <div id="cartucho6" style={{ display: cartVisible ? "block" : "none" }}>
  <img src={dialogoImg} alt="Cartucho" />
</div>

      {/* Puerta — loop autoplay, click toggle */}
      <div id="puerta" ref={puertaRef} onClick={handlePuerta} />

      {/* Frente Lottie */}
      <div id="frente" ref={frenteRef} />

      {/* P2 — frente */}
      <button className="btn1" id="btn-frente" onClick={handleFrente}>2</button>

      {/* Barra Lottie */}
      <div id="barra" ref={barraRef} />

      {/* Botón invisible barra */}
      <div id="boton-barra" onClick={handleBarra} />

    </div>
  );
};
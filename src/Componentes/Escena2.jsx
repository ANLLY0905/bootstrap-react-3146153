import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import "../stylesheets/Escenas.css";

import d1Img from "../assets/escena2/d1.png";
import d2Img from "../assets/escena2/d2.png";
import d3Img from "../assets/escena2/d3.png";

import luzPantalla from "../assets/escena2/luzPan.svg";

import botonMD from "../assets/escena2/bMD.png";
import botonSonido from "../assets/escena2/bsonido.png";

import pantallaJson from "../assets/escena2/pantalla.json";
import ministraJson from "../assets/escena2/mi.json";
import docJson from "../assets/escena2/ddrr.json";

import audioD1File from "../assets/escena2/d1.mp3";
import audioD2File from "../assets/escena2/d2.mp3";
import audioD3File from "../assets/escena2/d3.mp3";
import audioMainFile from "../assets/escena2/audio.mp3";

export const Escena2 = () => {

  const pantallaRef = useRef(null);
  const ministraRef = useRef(null);
  const docRef = useRef(null);

  const [d1Visible, setD1Visible] = useState(false);
  const [d2Visible, setD2Visible] = useState(false);
  const [d3Visible, setD3Visible] = useState(false);

  const audioD1 = useRef(new Audio(audioD1File));
  const audioD2 = useRef(new Audio(audioD2File));
  const audioD3 = useRef(new Audio(audioD3File));
  const audioMain = useRef(new Audio(audioMainFile));

  useEffect(() => {

    const pantallaAni = lottie.loadAnimation({
      container: pantallaRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: pantallaJson
    });

    const ministraAni = lottie.loadAnimation({
      container: ministraRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: ministraJson
    });

    const docAni = lottie.loadAnimation({
      container: docRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: docJson
    });

    ministraRef.current._lottie = ministraAni;
    docRef.current._lottie = docAni;

    return () => {
      pantallaAni.destroy();
      ministraAni.destroy();
      docAni.destroy();
    };

  }, []);

  const handleMinistra = () => {
    ministraRef.current?._lottie?.stop();
    ministraRef.current?._lottie?.play();
  };

  const handleDoc = () => {
    docRef.current?._lottie?.stop();
    docRef.current?._lottie?.play();
  };

  const handleSonido = () => {

    audioMain.current.loop = true;

    if (audioMain.current.paused) {
      audioMain.current.play();
    } else {
      audioMain.current.pause();
    }
  };

  const toggleD1 = () => {

    const visible = !d1Visible;

    setD1Visible(visible);

    if (visible) {
      audioD1.current.currentTime = 0;
      audioD1.current.play();
    } else {
      audioD1.current.pause();
      audioD1.current.currentTime = 0;
    }
  };

  const toggleD2 = () => {

    const visible = !d2Visible;

    setD2Visible(visible);

    if (visible) {
      audioD2.current.currentTime = 0;
      audioD2.current.play();
    } else {
      audioD2.current.pause();
      audioD2.current.currentTime = 0;
    }
  };

  const toggleD3 = () => {

    const visible = !d3Visible;

    setD3Visible(visible);

    if (visible) {
      audioD3.current.currentTime = 0;
      audioD3.current.play();
    } else {
      audioD3.current.pause();
      audioD3.current.currentTime = 0;
    }
  };

  return (
    <div className="contenedor2">

      {/* Dialogos */}

      <img
        id="d1"
        src={d1Img}
        alt=""
        className={d1Visible ? "visible" : ""}
      />

      <img
        id="d2"
        src={d2Img}
        alt=""
        className={d2Visible ? "visible" : ""}
      />

      <img
        id="d3"
        src={d3Img}
        alt=""
        className={d3Visible ? "visible" : ""}
      />

      {/* Botones */}

      <button id="btn1" onClick={toggleD1}>
        1
      </button>

      <button id="btn2" onClick={toggleD2}>
        2
      </button>

      <button id="btn3" onClick={toggleD3}>
        3
      </button>

      {/* Pantalla */}

      <div
        id="pantalla"
        ref={pantallaRef}
      />

      {/* Luz pantalla */}

      <div id="luzpantalla">
        <img id="luzpantalla" src={luzPantalla} alt="" />
      </div>

      {/* Botón documento */}

      <img
        id="botonMD"
        src={botonMD}
        alt=""
        onClick={handleDoc}
      />

      {/* Ministra */}

      <div
        id="ministra"
        ref={ministraRef}
        onClick={handleMinistra}
      />

      {/* Doc Bernal */}

      <div
        id="docBernal"
        ref={docRef}
      />

      {/* Sonido */}

      <img
        id="botonsonido"
        src={botonSonido}
        alt=""
        onClick={handleSonido}
      />

    </div>
  );
};
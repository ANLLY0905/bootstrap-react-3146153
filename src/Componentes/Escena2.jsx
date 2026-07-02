import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

// Assets — copia todos en src/assets/capitulo1/escena2/
import fonSvg from "../assets/escena2/Fon.svg";
import d1Img from "../assets/escena2/d1.png";
import d2Img from "../assets/escena2/d2.png";
import d3Img from "../assets/escena2/d3.png";
import bMDImg from "../assets/escena2/bMD.png";
import bSonidoImg from "../assets/escena2/bsonido.png";
import sombraImg from "../assets/escena2/sombracap.png";
import docBernalSvg from "../assets/escena2/DocBernal.svg";
import luzPanSvg from "../assets/escena2/luzPan.svg";
import pantallaJson from "../assets/escena2/pantalla.json";
import ministraJson from "../assets/escena2/ministra.json";
import miJson from "../assets/escena2/mi.json";
import ddrJson from "../assets/escena2/ddrr.json";
import docJson from "../assets/escena2/doc.json";
import audioD1 from "../assets/escena2/d1.mp3";
import audioD2 from "../assets/escena2/d2.mp3";
import audioD3 from "../assets/escena2/d3.mp3";
import audioMain from "../assets/escena2/audio.mp3";

export const Escena2 = () => {
  const pantallaRef = useRef(null);
  const ministraRef = useRef(null);
  const miRef = useRef(null);
  const ddrRef = useRef(null);
  const docRef = useRef(null);

  const [d1Visible, setD1Visible] = useState(false);
  const [d2Visible, setD2Visible] = useState(false);
  const [d3Visible, setD3Visible] = useState(false);

  const audD1 = useRef(new Audio(audioD1));
  const audD2 = useRef(new Audio(audioD2));
  const audD3 = useRef(new Audio(audioD3));
  const audMain = useRef(new Audio(audioMain));

  useEffect(() => {
    const panAni = lottie.loadAnimation({
      container: pantallaRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: pantallaJson,
    });

    const minAni = lottie.loadAnimation({
      container: ministraRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: ministraJson,
    });

    const miAni = lottie.loadAnimation({
      container: miRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: miJson,
    });

    const ddrAni = lottie.loadAnimation({
      container: ddrRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: ddrJson,
    });

    const docAni = lottie.loadAnimation({
      container: docRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: docJson,
    });

    // Guarda referencias para usar en clicks
    ministraRef.current._lottie = minAni;
    miRef.current._lottie = miAni;
    ddrRef.current._lottie = ddrAni;
    docRef.current._lottie = docAni;

    return () => {
      panAni.destroy();
      minAni.destroy();
      miAni.destroy();
      ddrAni.destroy();
      docAni.destroy();
    };
  }, []);

  const toggleD = (num) => {
    const setters = [setD1Visible, setD2Visible, setD3Visible];
    const audios = [audD1, audD2, audD3];
    const states = [d1Visible, d2Visible, d3Visible];

    const visible = !states[num - 1];
    setters[num - 1](visible);

    if (visible) {
      audios[num - 1].current.currentTime = 0;
      audios[num - 1].current.play();
    } else {
      audios[num - 1].current.pause();
      audios[num - 1].current.currentTime = 0;
    }
  };

  const handleMinistra = () => {
    ministraRef.current._lottie?.stop();
    ministraRef.current._lottie?.play();
  };

  const handleBotonMD = () => {
    miRef.current._lottie?.stop();
    miRef.current._lottie?.play();
    ddrRef.current._lottie?.stop();
    ddrRef.current._lottie?.play();
  };

  const handleSonido = () => {
    if (audMain.current.paused) {
      audMain.current.play();
    } else {
      audMain.current.pause();
    }
  };

  return (
    <div
      className="contenedor"
      style={{ backgroundImage: `url(${fonSvg})` }}
    >
      {/* Diálogos */}
      <img id="d1" src={d1Img} alt="" style={{ display: d1Visible ? "block" : "none" }} />
      <img id="d2" src={d2Img} alt="" style={{ display: d2Visible ? "block" : "none" }} />
      <img id="d3" src={d3Img} alt="" style={{ display: d3Visible ? "block" : "none" }} />

      {/* Botones de diálogo */}
      <button id="btn1" onClick={() => toggleD(1)}>1</button>
      <button id="btn2" onClick={() => toggleD(2)}>2</button>
      <button id="btn3" onClick={() => toggleD(3)}>3</button>

      {/* Pantalla Lottie */}
      <div id="pantalla" ref={pantallaRef} />

      {/* Luz pantalla SVG */}
      <img id="luzpantalla" src={luzPanSvg} alt="" />

      {/* Doc Bernal SVG */}
      <img id="docBernal" src={docBernalSvg} alt="" />

      {/* Ministra Lottie */}
      <div
        id="ministra"
        ref={ministraRef}
        onClick={handleMinistra}
      />

      {/* Botón MD */}
      <img
        id="botonMD"
        src={bMDImg}
        alt=""
        onClick={handleBotonMD}
      />

      {/* Botón sonido */}
      <img
        id="botonsonido"
        src={bSonidoImg}
        alt=""
        onClick={handleSonido}
      />

      {/* Sombra cap */}
      <img src={sombraImg} id="sombracap" alt="" />
    </div>
  );
};
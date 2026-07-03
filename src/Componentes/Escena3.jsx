import "../stylesheets/Escenas.css";
import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

// Assets — copia todos en src/assets/capitulo1/escena3/
import fondoSvg from "../assets/escena3/Fondo.svg";
import cartImg from "../assets/escena3/cart.png";
import dialogoImg from "../assets//escena3/dialogomini.png";
import alerta2Svg from "../assets/escena3/Alerta2.svg";
import drekAniJson from "../assets/escena3/drekAni3.json";
import miniJson from "../assets/escena3/mini.json";
import audioCartucho from "../assets/escena3/cartuVoz.mp3";
import audioDiaMinistra from "../assets/escena3/diaMinistra.mp3";
import audioRugido from "../assets/escena3/rugido.mp3";

export const Escena3 = () => {
  const drekRef = useRef(null);
  const ministraRef = useRef(null);
  const [cartVisible, setCartVisible] = useState(false);
  const [dialogoVisible, setDialogoVisible] = useState(false);

  const audCart = useRef(new Audio(audioCartucho));
  const audMinistra = useRef(new Audio(audioDiaMinistra));
  const audRugido = useRef(new Audio(audioRugido));
  const vecesRef = useRef(0);

  useEffect(() => {
    const drekAni = lottie.loadAnimation({
      container: drekRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: drekAniJson,
    });

    const miniAni = lottie.loadAnimation({
      container: ministraRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: miniJson,
    });

    drekRef.current._lottie = drekAni;
    ministraRef.current._lottie = miniAni;

    // Rugido se repite 4 veces
    audRugido.current.addEventListener("ended", () => {
      if (vecesRef.current < 4) {
        vecesRef.current++;
        audRugido.current.currentTime = 0;
        audRugido.current.play();
      }
    });

    return () => {
      drekAni.destroy();
      miniAni.destroy();
    };
  }, []);

  // Botón 1 — cartucho narración
  const handleBtn1 = () => {
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

  // Click en ministra — diálogo + audio
  const handleMinistra = () => {
    ministraRef.current._lottie?.stop();
    ministraRef.current._lottie?.play();

    const visible = !dialogoVisible;
    setDialogoVisible(visible);
    if (visible) {
      audMinistra.current.currentTime = 0;
      audMinistra.current.play();
    } else {
      audMinistra.current.pause();
      audMinistra.current.currentTime = 0;
    }
  };

  // Click en drekxon — animación + rugido
  const handleDrekxon = () => {
    drekRef.current._lottie?.stop();
    drekRef.current._lottie?.play();
    vecesRef.current = 0;
    audRugido.current.currentTime = 0;
    audRugido.current.play();
  };

  return (
    <div
      className="contenedor3"
      style={{ backgroundImage: `url(${fondoSvg})` }}
    >
      {/* Narración cartucho */}
      <img
        id="cartucho1"
        src={cartImg}
        alt=""
        style={{ display: cartVisible ? "block" : "none" }}
      />

      {/* Botón narración */}
      <button className="btn1" id="btn1" onClick={handleBtn1}>1</button>

      {/* Diálogo ministra */}
      <img
        id="dialogo"
        src={dialogoImg}
        alt=""
        style={{ display: dialogoVisible ? "block" : "none" }}
      />

      {/* Ministra Lottie */}
      <div id="ministra" ref={ministraRef} onClick={handleMinistra} />

      {/* Alerta 1 SVG animada con CSS */}
      <img id="alerta1" src={fondoSvg.replace("Fondo.svg", "Alerta1_1.svg")} alt="" />

      {/* Alerta 2 */}
      <img id="alerta2" src={alerta2Svg} alt="" />

      {/* Drekxon Lottie */}
      <div id="drekxon" ref={drekRef} onClick={handleDrekxon} />
    </div>
  );
};

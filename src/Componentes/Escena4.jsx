import "../stylesheets/Escenas.css";
import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

// Assets — copia todos en src/assets/capitulo1/escena4/
import fondoSvg from "../assets/escena4/Fondoo.svg";
import nubeSvg from "../assets/escena4/Nube.svg";
import arbolSvg from "../assets//escena4/Arbol.svg";
import talloImg from "../assets/escena4/tallo-02.png";
import cartuchoImg from "../assets/escena4/cartuchooo.png";
import emiliaJson from "../assets/escena4/emiliaaa.json";
import kianJson from "../assets/escena4/kiannn.json";
import audioCartucho from "../assets/escena4/cartucho.mp3";
import audioEmilia from "../assets/escena4/emilia.mp3";
import audioKian from "../assets/escena4/kian.mp3";

export const Escena4 = () => {
  const emiliaRef = useRef(null);
  const kianRef = useRef(null);
  const [cartVisible, setCartVisible] = useState(false);

  const audCart = useRef(new Audio(audioCartucho));
  const audEmilia = useRef(new Audio(audioEmilia));
  const audKian = useRef(new Audio(audioKian));

  useEffect(() => {
    const emiliaAni = lottie.loadAnimation({
      container: emiliaRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: emiliaJson,
    });

    const kianAni = lottie.loadAnimation({
      container: kianRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: kianJson,
    });

    emiliaRef.current._lottie = emiliaAni;
    kianRef.current._lottie = kianAni;

    return () => {
      emiliaAni.destroy();
      kianAni.destroy();
    };
  }, []);

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

  const handleEmilia = () => {
    emiliaRef.current._lottie?.stop();
    emiliaRef.current._lottie?.play();
    audEmilia.current.currentTime = 0;
    audEmilia.current.play();
  };

  const handleKian = () => {
    kianRef.current._lottie?.stop();
    kianRef.current._lottie?.play();
    audKian.current.currentTime = 0;
    audKian.current.play();
  };

  return (
    <div
      className="contenedor4"
      style={{ backgroundImage: `url(${fondoSvg})` }}
    >
      {/* Botón narración */}
      <button className="btn1" id="btn1" onClick={handleBtn1}>1</button>

      {/* Cartucho narración */}
      <img
        id="cartucho4"
        src={cartuchoImg}
        alt=""
        style={{ display: cartVisible ? "block" : "none" }}
      />

      {/* Nubes */}
      <img id="nube1" src={nubeSvg} alt="" />
      <img id="nube2" src={nubeSvg} alt="" />
      <img id="nube3" src={nubeSvg} alt="" />
      <img id="nube4" src={nubeSvg} alt="" />
      <img id="nube5" src={nubeSvg} alt="" />

      {/* Árboles */}
      <img id="tallo1" src={talloImg} alt="" />
      <img id="arbol1" src={arbolSvg} alt="" />
      <img id="tallo2" src={talloImg} alt="" />
      <img id="arbol2" src={arbolSvg} alt="" />

      {/* Emilia Lottie */}
      <div id="emilia4" ref={emiliaRef} onClick={handleEmilia} />

      {/* Kian Lottie */}
      <div id="kian4" ref={kianRef} onClick={handleKian} />
    </div>
  );
};
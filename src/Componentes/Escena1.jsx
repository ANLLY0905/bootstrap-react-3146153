import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import "../stylesheets/Escenas.css";

import fondoR from "../assets/escena1/FondoR.svg";
import cartucho from "../assets/escena1/Cartucho.png";
import sombrascap from "../assets/escena1/sombrascap.png";
import audioCartucho from "../assets/escena1/Audio-cartu.mp3";
import audioSonido from "../assets/escena1/sonido.mp3";
import docJson from "../assets/escena1/doc.json";
import drekJson from "../assets/escena1/drek.json";

export const Escena1 = () => {
  const bernalRef = useRef(null);
  const drek1Ref = useRef(null);
  const drek2Ref = useRef(null);
  const drek3Ref = useRef(null);
  const [cartVisible, setCartVisible] = useState(false);
  const [activo, setActivo] = useState(false);

  const audCart = useRef(new Audio(audioCartucho));
  const audEscena = useRef(new Audio(audioSonido));

  useEffect(() => {
    const bernalAni = lottie.loadAnimation({
      container: bernalRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: docJson,
    });

    const dre1Ani = lottie.loadAnimation({
      container: drek1Ref.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: drekJson,
    });

    const dre2Ani = lottie.loadAnimation({
      container: drek2Ref.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: drekJson,
    });

    const dre3Ani = lottie.loadAnimation({
      container: drek3Ref.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: drekJson,
    });

    bernalRef.current._lottie = bernalAni;
    drek1Ref.current._lottie = dre1Ani;
    drek2Ref.current._lottie = dre2Ani;
    drek3Ref.current._lottie = dre3Ani;

    return () => {
      bernalAni.destroy();
      dre1Ani.destroy();
      dre2Ani.destroy();
      dre3Ani.destroy();
    };
  }, []);

  // Click en EsComputador — toggle sonido + clase activo
  const handleComputador = () => {
    const nuevoActivo = !activo;
    setActivo(nuevoActivo);
    if (nuevoActivo) {
      audEscena.current.play();
    } else {
      audEscena.current.pause();
      audEscena.current.currentTime = 0;
    }
  };

  const handleBernal = (e) => {
    e.stopPropagation();
    bernalRef.current._lottie?.stop();
    bernalRef.current._lottie?.play();
  };

  const handleActivador = (e) => {
    e.stopPropagation();
    [drek1Ref, drek2Ref, drek3Ref].forEach((ref) => {
      ref.current._lottie?.stop();
      ref.current._lottie?.play();
    });
  };

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

  return (
    <div
      className="contenedor"
      style={{ backgroundImage: `url(${fondoR})` }}
    >
      {/* Cartucho narración */}
      <img
        className={`cartucho${cartVisible ? " visible" : ""}`}
        id="cartucho"
        src={cartucho}
        alt=""
      />

      {/* Botón cartucho */}
      <button className="btn1" id="btn1" onClick={handleBtn1}>1</button>

      {/* EsComputador — click activa sonido y animaciones CSS */}
      <div
        id="EsComputador"
        className={activo ? "activo" : ""}
        onClick={handleComputador}
      >
        {/* Luz PC — SVG inline igual que el original */}
        <svg id="luzpc" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 321 190">
          <defs><style>{`.cls-1 { opacity: .3; }`}</style></defs>
          <g id="Luz_pantalla" data-name="Luz pantalla">
            <g className="cls-1">
              <image width="321" height="190" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUEAAAC+..." />
            </g>
          </g>
        </svg>

        {/* Barras — SVG inline */}
        <svg id="barras" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.4 33.97">
          <defs><style>{`.cls-barras { fill: #8b96ea; stroke: #000; stroke-miterlimit: 10; }`}</style></defs>
          <g id="Pantalla">
            <polygon className="cls-barras" points="21.62 2.87 .5 4.44 .5 1.3 21.62 .52 21.62 2.87"/>
            <polygon className="cls-barras" points="24.9 22.48 1.23 23.26 1.23 20.12 24.9 19.34 24.9 22.48"/>
            <polygon className="cls-barras" points="24.9 32.67 1.23 33.45 1.23 30.32 24.9 29.53 24.9 32.67"/>
          </g>
        </svg>

        {/* Circulos — SVG inline */}
        <svg id="circulos" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.29 40.99">
          <g id="Pantalla">
            <ellipse style={{fill:"#2b5b37", stroke:"#000", strokeMiterlimit:10}} cx="7.78" cy="5.6" rx="7.28" ry="5.1"/>
            <ellipse style={{fill:"#9e9200", stroke:"#000", strokeMiterlimit:10}} cx="7.78" cy="21.28" rx="7.28" ry="5.1"/>
            <ellipse style={{fill:"#3f2315", stroke:"#000", strokeMiterlimit:10}} cx="8.51" cy="35.4" rx="7.28" ry="5.1"/>
          </g>
        </svg>

        {/* Redondo — SVG inline */}
        <svg id="redondo" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.98 34.5">
          <g id="Pantalla">
            <ellipse style={{fill:"#753434"}} cx="25.49" cy="17.25" rx="25.49" ry="17.25"/>
            <ellipse style={{fill:"#753434", opacity:0.5}} cx="25.49" cy="17.25" rx="25.49" ry="17.25"/>
          </g>
        </svg>
      </div>

      {/* DrBernal — Lottie, click directo */}
      <div
        id="DrBernal"
        ref={bernalRef}
        onClick={handleBernal}
      />

      {/* Activador Drekxon — div invisible, dispara los 3 */}
      <div
        id="activadordrekxon"
        onClick={handleActivador}
      />

      {/* Los 3 Drekxon — Lottie */}
      <div id="Drekxon" ref={drek1Ref} />
      <div id="Drekxon2" ref={drek2Ref} />
      <div id="Drekxon3" ref={drek3Ref} />

      {/* Sombras */}
      <img id="sombrascap" src={sombrascap} alt="" />

      {/* Botón cartucho */}
      <button className="btn1" id="btn-cartucho" onClick={handleBtn1}
        style={{ top: "150px", left: "1140px" }}>C</button>
    </div>
  );
};
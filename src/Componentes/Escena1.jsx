import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import "../stylesheets/Escenas.css";

import fondoSvg from "../assets/escena1/FondoR.svg";
import cartuchoImg from "../assets/escena1/Cartuchocorre.png";
import sombraImg from "../assets/escena1/sombrascap.png";
import audioCartucho from "../assets/escena1/Audio-cartu.mp3";
import audioEscena from "../assets/escena1/sonido.mp3";
import docJson from "../assets/escena1/doc.json";
import drekJson from "../assets/escena1/drek.json";
import luzpc from "../assets/escena1/LuzPC.svg";

export const Escena1 = () => {
  const bernalRef = useRef(null);
  const drek1Ref = useRef(null);
  const drek2Ref = useRef(null);
  const drek3Ref = useRef(null);
  const [cartVisible, setCartVisible] = useState(false);
  const [activo, setActivo] = useState(false);

  const audCart = useRef(new Audio(audioCartucho));
  const audEscena = useRef(new Audio(audioEscena));

  useEffect(() => {
    const bernalAni = lottie.loadAnimation({
      container: bernalRef.current,
      renderer: "svg", loop: false, autoplay: false,
      animationData: docJson,
    });
    const dre1Ani = lottie.loadAnimation({
      container: drek1Ref.current,
      renderer: "svg", loop: false, autoplay: false,
      animationData: drekJson,
    });
    const dre2Ani = lottie.loadAnimation({
      container: drek2Ref.current,
      renderer: "svg", loop: false, autoplay: false,
      animationData: drekJson,
    });
    const dre3Ani = lottie.loadAnimation({
      container: drek3Ref.current,
      renderer: "svg", loop: false, autoplay: false,
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

  // Click en DrBernal
  const handleBernal = (e) => {
    e.stopPropagation();
    bernalRef.current._lottie?.stop();
    bernalRef.current._lottie?.play();
  };

  // Click en activadordrekxon — dispara los 3
  const handleActivador = (e) => {
    e.stopPropagation();
    [drek1Ref, drek2Ref, drek3Ref].forEach((ref) => {
      ref.current._lottie?.stop();
      ref.current._lottie?.play();
    });
  };

  // Botón 1 — toggle cartucho
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
    <div className="contenedor" style={{ backgroundImage: `url(${fondoSvg})` }}>

      {/* Cartucho narración */}
      <img className={`cartucho${cartVisible ? " visible" : ""}`} id="cartucho" src={cartuchoImg} alt="" />

      {/* Botón cartucho */}
      <button className="btn1" id="btn1" onClick={handleBtn1}>1</button>

      {/* EsComputador — click en el div completo */}
      <div id="EsComputador" className={activo ? "activo" : ""} onClick={handleComputador}>

        {/* luzpc — SVG inline */}
        <svg id="luzpc" data-name="Capa 2"  xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 321 190">
          <defs><style>{`.cls-luzpc { opacity: .3; }`}</style></defs>
          <g><g className="cls-luzpc">
            <img src={luzpc} alt="" />
        </g></g>
        </svg>

        {/* barras — SVG inline */}
        <svg id="barras" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.4 33.97">
          <g id="Pantalla">
            <polygon style={{fill:"#8b96ea", stroke:"#000", strokeMiterlimit:10}} points="21.62 2.87 .5 4.44 .5 1.3 21.62 .52 21.62 2.87"/>
            <polygon style={{fill:"#8b96ea", stroke:"#000", strokeMiterlimit:10}} points="24.9 22.48 1.23 23.26 1.23 20.12 24.9 19.34 24.9 22.48"/>
            <polygon style={{fill:"#8b96ea", stroke:"#000", strokeMiterlimit:10}} points="24.9 32.67 1.23 33.45 1.23 30.32 24.9 29.53 24.9 32.67"/>
          </g>
        </svg>

        {/* circulos — SVG inline */}
        <svg id="circulos" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.29 40.99">
          <g id="Pantalla">
            <ellipse style={{fill:"#2b5b37", stroke:"#000", strokeMiterlimit:10}} cx="7.78" cy="5.6" rx="7.28" ry="5.1"/>
            <ellipse style={{fill:"#9e9200", stroke:"#000", strokeMiterlimit:10}} cx="7.78" cy="21.28" rx="7.28" ry="5.1"/>
            <ellipse style={{fill:"#3f2315", stroke:"#000", strokeMiterlimit:10}} cx="8.51" cy="35.4" rx="7.28" ry="5.1"/>
          </g>
        </svg>

        {/* redondo — SVG inline */}
        <svg id="redondo" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.98 34.5">
          <g id="Pantalla">
            <ellipse style={{fill:"#753434"}} cx="25.49" cy="17.25" rx="25.49" ry="17.25"/>
            <ellipse style={{fill:"#753434", opacity:0.5}} cx="25.49" cy="17.25" rx="25.49" ry="17.25"/>
          </g>
        </svg>

      </div>

      {/* DrBernal — Lottie con click directo */}
      <div id="DrBernal" ref={bernalRef} onClick={handleBernal} />

      {/* Activador Drekxon — div invisible dispara los 3 */}
      <div id="activadordrekxon" onClick={handleActivador} />

      {/* Los 3 Drekxon */}
      <div id="Drekxon" ref={drek1Ref} />
      <div id="Drekxon2" ref={drek2Ref} />
      <div id="Drekxon3" ref={drek3Ref} />

      {/* Sombras */}
      <img id="sombrascap" src={sombraImg} alt="" />

    </div>
  );
};
import { useEffect, useRef } from "react";
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
  const docRef = useRef(null);
  const drek2Ref = useRef(null);
  const drek3Ref = useRef(null);
  const contenedorRef = useRef(null);
  const audioCar = useRef(new Audio(audioCartucho));
  const audioSon = useRef(new Audio(audioSonido));


const docAniRef = useRef(null);
const drek2AniRef = useRef(null);
const drek3AniRef = useRef(null);

  useEffect(() => {

    docAniRef.current = lottie.loadAnimation({
  container: docRef.current,
  renderer: "svg",
  loop: false,
  autoplay: false,
  animationData: docJson,
});

drek2AniRef.current = lottie.loadAnimation({
  container: drek2Ref.current,
  renderer: "svg",
  loop: false,
  autoplay: false,
  animationData: drekJson,
});

drek3AniRef.current = lottie.loadAnimation({
  container: drek3Ref.current,
  renderer: "svg",
  loop: false,
  autoplay: false,
  animationData: drekJson,
});
   return () => {
  docAniRef.current?.destroy();
  drek2AniRef.current?.destroy();
  drek3AniRef.current?.destroy();
};
  }, []);

  const togglePC = () => {
    contenedorRef.current.classList.toggle("activo");
    if (contenedorRef.current.classList.contains("activo")) {
      audioSon.current.currentTime = 0;
      audioSon.current.play();
    } else {
      audioSon.current.pause();
      audioSon.current.currentTime = 0;
    }
  };

  const toggleCartucho = () => {
    const cart = document.getElementById("cartucho");
    cart.classList.toggle("visible");
    if (cart.classList.contains("visible")) {
      audioCar.current.currentTime = 0;
      audioCar.current.play();
    } else {
      audioCar.current.pause();
      audioCar.current.currentTime = 0;
    }
  };

  return (
    <div
      ref={contenedorRef}
      className="contenedor"
      style={{ backgroundImage: `url(${fondoR})` }}
    >
      {/* Cartucho */}
      <img className="cartucho" id="cartucho" src={cartucho} alt="" />

      {/* Lottie: documento */}
      <div id="DrBernal" ref={docRef} style={{ width: "315px", position: "absolute", top: "349px", left: "950px", cursor: "pointer" }} />

      {/* Activador Drekxon */}
      <div
        id="activadordrekxon"
       onClick={() => {
  drek3AniRef.current?.stop();
  drek3AniRef.current?.play();
        }}
      />

      {/* Lottie: Drekxon 2 */}
      <div id="Drekxon2" ref={drek2Ref} style={{ width: "230px", position: "absolute", top: "235px", left: "475px" }} />

      {/* Lottie: Drekxon 3 */}
      <div id="Drekxon3" ref={drek3Ref} style={{ width: "200px", position: "absolute", top: "256px", left: "785px" }} />

      {/* Sombras */}
      <img id="sombrascap" src={sombrascap} alt="" />

      {/* Botón PC */}
      <button className="btn1" id="btn1" onClick={togglePC}>⏻</button>

      {/* Botón cartucho */}
      <button className="btn1" id="btn-cartucho" onClick={toggleCartucho}
        style={{ top: "150px", left: "1140px" }}>C</button>
    </div>
  );
};
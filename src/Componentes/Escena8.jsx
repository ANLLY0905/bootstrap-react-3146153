import "../stylesheets/Escenas.css";
import { useEffect, useRef, useState } from "react";

import fondoSvg from "../assets/escena8/fondo.svg";
import emiliaSvg from "../assets/escena8/emiaaa.svg";
import kianSvg from "../assets/escena8/kiannn.svg";
import burbuja1Img from "../assets/escena8/burbuja1.png";
import burbuja2Img from "../assets/escena8/burbuja2.png";
import burbuja3Img from "../assets/escena8/burbuja3.png";
import audioEmilia from "../assets/escena8/emilia.mp3";
import audioKian from "../assets/escena8/kian.mp3";
import audioEmilia2 from "../assets/escena8/emilia2.mp3";

export const Escena8 = () => {
  const [emiliaVisible, setEmiliaVisible] = useState(false);
  const [kianVisible, setKianVisible] = useState(false);
  const [burbuja1, setBurbuja1] = useState(false);
  const [burbuja2, setBurbuja2] = useState(false);
  const [burbuja3, setBurbuja3] = useState(false);
  const [pi1Visible, setPi1Visible] = useState(true);
  const [pi2Visible, setPi2Visible] = useState(false);
  const [corriendo, setCorriendo] = useState(false);
  const [temblando, setTemblando] = useState(false);

  const aud1 = useRef(new Audio(audioEmilia));
  const aud2 = useRef(new Audio(audioKian));
  const aud3 = useRef(new Audio(audioEmilia2));

  useEffect(() => {
    // Entrada de personajes
    setTimeout(() => setEmiliaVisible(true), 300);
    setTimeout(() => setKianVisible(true), 600);
  }, []);

  const mostrarBurbujasSecuencial = () => {
    setPi1Visible(false);

    // Burbuja 1
    setBurbuja1(true);
    aud1.current.play();
    aud1.current.addEventListener("ended", () => {
      setBurbuja1(false);

      // Burbuja 2
      setBurbuja2(true);
      aud2.current.play();
      aud2.current.addEventListener("ended", () => {
        setBurbuja2(false);

        // Burbuja 3
        setBurbuja3(true);
        aud3.current.play();
        aud3.current.addEventListener("ended", () => {
          setBurbuja3(false);
          setPi2Visible(true);
        }, { once: true });

      }, { once: true });

    }, { once: true });
  };

  const handlePi2 = () => {
    setCorriendo(true);
    setTemblando(true);
    setTimeout(() => setTemblando(false), 3000);
  };

  return (
    <div
      className={`container8${temblando ? " temblando" : ""}`}
      style={{ backgroundImage: `url(${fondoSvg})` }}
    >
      {/* Luz general parpadeante */}
      <div id="luzGeneral" />

      {/* Emilia */}
      <img
        src={emiliaSvg}
        id="emilia"
        className={`personaje${emiliaVisible ? " visible" : ""}${corriendo ? " corriendo" : ""}`}
        alt=""
      />

      {/* Kian */}
      <img
        src={kianSvg}
        id="kian"
        className={`personaje${kianVisible ? " visible" : ""}${corriendo ? " corriendo" : ""}`}
        alt=""
      />

      {/* Burbujas */}
      {burbuja1 && <img id="burbuja1" src={burbuja1Img} className="burbuja visible" alt="" />}
      {burbuja2 && <img id="burbuja2" src={burbuja2Img} className="burbuja visible" alt="" />}
      {burbuja3 && <img id="burbuja3" src={burbuja3Img} className="burbuja visible" alt="" />}

      {/* P1 */}
      {pi1Visible && (
        <div
          id="pi1"
          className="btn1"
          style={{ top: "220px", left: "180px" }}
          onClick={mostrarBurbujasSecuencial}
        >
          1
        </div>
      )}

      {/* P2 */}
      {pi2Visible && (
        <div
          id="pi2"
          className="btn1"
          style={{ top: "480px", left: "700px" }}
          onClick={handlePi2}
        >
          2
        </div>
      )}
    </div>
  );
};
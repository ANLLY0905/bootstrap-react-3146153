import "../stylesheets/Escenas.css";

import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

import fondoSvg from "../assets/escena9/Fondo.svg";
import luzSvg from "../assets/escena9/Luz.svg";
import emiliaImg from "../assets/escena9/EmiliaFrente.png";
import kianImg from "../assets/escena9/kianfrente.png";
import cartucho1Img from "../assets/escena9/cartucho1.png";
import cartucho2Img from "../assets/escena9/cartucho2.png";
import dialogo1Img from "../assets/escena9/dialogo1.png";
import dialogo2Img from "../assets/escena9/dialogo2.png";
import ojosEmiliaJson from "../assets/escena9/ojosemilia.json";
import ojosKianJson from "../assets/escena9/ojoskian.json";
import audioCart1 from "../assets/escena9/cartucho1.mp3";
import audioCart2 from "../assets/escena9/cartucho2.mp3";
import audioDial1 from "../assets/escena9/dialogo1.mp3";
import audioDial2 from "../assets/escena9/dialogo2.mp3";

export const Escena9 = () => {
  const ojosEmiliaRef = useRef(null);
  const ojosKianRef = useRef(null);

  const [cart1Visible, setCart1Visible] = useState(false);
  const [cart2Visible, setCart2Visible] = useState(false);
  const [dial1Visible, setDial1Visible] = useState(false);
  const [dial2Visible, setDial2Visible] = useState(false);

  const aud1 = useRef(new Audio(audioCart1));
  const aud2 = useRef(new Audio(audioCart2));
  const audDial1 = useRef(new Audio(audioDial1));
  const audDial2 = useRef(new Audio(audioDial2));

  useEffect(() => {
    const emiliaAni = lottie.loadAnimation({
      container: ojosEmiliaRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: ojosEmiliaJson,
    });

    const kianAni = lottie.loadAnimation({
      container: ojosKianRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: ojosKianJson,
    });

    ojosEmiliaRef.current._lottie = emiliaAni;
    ojosKianRef.current._lottie = kianAni;

    return () => {
      emiliaAni.destroy();
      kianAni.destroy();
    };
  }, []);

  // Btn1 — cartucho 1
  const handleBtn1 = () => {
    const visible = !cart1Visible;
    setCart1Visible(visible);
    if (visible) {
      aud1.current.currentTime = 0;
      aud1.current.play();
    } else {
      aud1.current.pause();
      aud1.current.currentTime = 0;
    }
  };

  // Btn2 — cartucho 2
  const handleBtn2 = () => {
    const visible = !cart2Visible;
    setCart2Visible(visible);
    if (visible) {
      aud2.current.currentTime = 0;
      aud2.current.play();
    } else {
      aud2.current.pause();
      aud2.current.currentTime = 0;
    }
  };

  // Click Emilia — ojos + diálogo 1
  const handleEmilia = () => {
    ojosEmiliaRef.current._lottie?.stop();
    ojosEmiliaRef.current._lottie?.play();

    const visible = !dial1Visible;
    setDial1Visible(visible);
    if (visible) {
      audDial1.current.currentTime = 0;
      audDial1.current.play();
    } else {
      audDial1.current.pause();
      audDial1.current.currentTime = 0;
    }
  };

  // Click Kian — ojos + diálogo 2
  const handleKian = () => {
    ojosKianRef.current._lottie?.stop();
    ojosKianRef.current._lottie?.play();

    const visible = !dial2Visible;
    setDial2Visible(visible);
    if (visible) {
      audDial2.current.currentTime = 0;
      audDial2.current.play();
    } else {
      audDial2.current.pause();
      audDial2.current.currentTime = 0;
    }
  };

  return (
    <div
      className="contenedor9"
      style={{ backgroundImage: `url(${fondoSvg})` }}
    >
      {/* Luz SVG animada con CSS */}
      <img id="luz" src={luzSvg} alt="" />

      {/* Btn 1 — cartucho 1 */}
      <button className="btn1" id="btn1" onClick={handleBtn1}>1</button>
      <img
        id="cartucho1"
        src={cartucho1Img}
        alt=""
        className={cart1Visible ? "visible" : ""}
      />

      {/* Btn 2 — cartucho 2 */}
      <button className="btn2" id="btn2" onClick={handleBtn2}>2</button>
      <img
        id="cartucho2"
        src={cartucho2Img}
        alt=""
        className={cart2Visible ? "visible" : ""}
      />

      {/* Emilia */}
      <img id="emilia9" src={emiliaImg} alt="" onClick={handleEmilia} />
      <div id="ojos" ref={ojosEmiliaRef} />
      <img
        id="dialogo1"
        src={dialogo1Img}
        alt=""
        className={dial1Visible ? "visible" : ""}
      />

      {/* Kian */}
      <img id="kian9" src={kianImg} alt="" onClick={handleKian} />
      <div id="ojos2" ref={ojosKianRef} />
      <img
        id="dialogo2"
        src={dialogo2Img}
        alt=""
        className={dial2Visible ? "visible" : ""}
      />
    </div>
  );
};
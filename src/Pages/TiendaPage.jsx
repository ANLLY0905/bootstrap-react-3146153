import { useState, useRef, useEffect } from "react";
import { Header } from "../Componentes/Header";
import { Footer } from "../assets/Footer";
import cajaImg from "../assets/caja.png";
import lampara1 from "../assets/Lámpara-1.png";
import lampara2 from "../assets/Lámpara-2.png";
import lampara3 from "../assets/Lámpara-3.png";

import escenario1 from "../assets/escenario1-g1.png";
import escenario2 from "../assets/escenario1-g2.png";
import escenario3 from "../assets/escenario2-g1.png";
import escenario4 from "../assets/escenario2-g2.png";
import escenario5 from "../assets/escenario3-g1.png";
import escenario6 from "../assets/escenario3-g2.png";
import escenario7 from "../assets/escenario4-g1.png";
import escenario8 from "../assets/escenario4-g2.png";
import escenario9 from "../assets/escenario5-g1.png";
//import escenario10 from "../assets/escenario5-g2.png";

import personaje1 from "../assets/Emilia.png";
import personaje2 from "../assets/Kian.png";
import personaje3 from "../assets/Drekxon.png";
import personaje4 from "../assets/Dr.Bernal.png";
import personaje5 from "../assets/Ministra.png";

import buzosImg from "../assets/buzos.png";

const escenarios = [
  { id: 1, nombre: "BIBLIOTECA", img: escenario1 },
  { id: 2, nombre: "LABORATORIO 4", img: escenario2 },
  { id: 3, nombre: "LABORATORIO 2", img: escenario3 },
  { id: 4, nombre: "COMEDOR CASA EMILIA", img: escenario4 },
  { id: 5, nombre: "LABORATORIO 1", img: escenario5 },
  { id: 6, nombre: "PASILLO", img: escenario6 },
  { id: 7, nombre: "LABORATORIO 3", img: escenario7 },
  { id: 8, nombre: "REFUGIO", img: escenario8 },
  { id: 9, nombre: "SALÓN DESTRUIDO", img: escenario9 },
  //{ id: 10, nombre: "Nombre escenario 10", img: escenario10 },
];

const personajes = [
  { id: 1, nombre: "EMILIA", img: personaje1 },
  { id: 2, nombre: "KIAN", img: personaje2 },
  { id: 3, nombre: "DREKXON", img: personaje3 },
  { id: 4, nombre: "DR. BERNAL", img: personaje4 },
  { id: 5, nombre: "MINISTRA", img: personaje5 },
];

const productos = [
  {
    id: 1,
    nombre: "Caja Sorpresa",
    precio: 85000,
    descripcion: "Contiene 1 personaje coleccionable + 2 escenarios del universo El Silencio de Orien. ¡No sabes qué te toca!",
    img: cajaImg,
    badge: "1 personaje + 2 escenarios",
  },

  {
  id: 2,
  nombre: "Lámpara Drekxon",
  precio: 120000,
  descripcion: "Lámpara de ambiente con varios modos de iluminación inspirada en la estética oscura del cómic. Perfecta para tu escritorio.",
  imgs: [lampara1, lampara2, lampara3],
  badge: "Edición limitada",
  },

  {
    id: 3,
    nombre: "Buzos",
    precio: 85000,
    descripcion: "Buzos de algodón con estampado de Visumbrio. Cómodos y cálidos, perfectos para cualquier ocasión.",
    img: buzosImg, 
    badge: "",
  },
];

const cop = (n) => `$${n.toLocaleString("es-CO")} COP`;

const PlaceholderImg = ({ height = 220, label }) => (
  <div style={{
    height,
    background: "linear-gradient(135deg, #1a0000 0%, #0d0d0d 100%)",
    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
    borderRadius: "4px",
  }}>
    <span style={{ fontSize: "2rem", opacity: 0.2 }}>🖼</span>
    <p style={{ color: "#444", fontSize: "0.7rem", letterSpacing: "0.1em", margin: "0.5rem 0 0", textTransform: "uppercase" }}>{label}</p>
  </div>
);

const ImageCarousel = ({ images, alt }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={{ position: "relative", height: "220px" }}>
      <img
        src={images[index]}
        alt={alt}
        style={{ width: "100%", height: "220px", objectFit: "contain", transition: "opacity 0.3s" }}
      />
      <div style={{ position: "absolute", bottom: "0", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "6px" }}>
        {images.map((_, i) => (
          <span key={i} style={{
            width: i === index ? "18px" : "6px", height: "6px", borderRadius: "3px",
            background: i === index ? "#a6bec9" : "rgb(255, 255, 255)", transition: "all 0.3s",
          }} />
        ))}
      </div>
    </div>
  );
};

const Slider = ({ items, tipo }) => {
  const ref = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
  };
  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    ref.current.scrollLeft = scrollLeft - (x - startX);
  };
  const onMouseUp = () => setIsDragging(false);

  return (
    <div
      ref={ref}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      style={{
        display: "flex", gap: "1rem", overflowX: "auto",
        cursor: isDragging ? "grabbing" : "grab",
        paddingBottom: "0.75rem",
        scrollbarWidth: "thin", scrollbarColor: "#a6bec9 #ffffff",
        userSelect: "none",
      }}
    >
      {items.map((item) => (
        <div key={item.id} style={{
          minWidth: "250px", background: "#daeaef",
          border: "1px solid #7bbedd", borderRadius: "4px",
          padding: "0.75rem", flexShrink: 0, textAlign: "center",
        }}>
          {item.img ? (
            <img src={item.img} alt={item.nombre} style={{ width: "100%", height: "280px", objectFit: "contain" }} />
          ) : (
            <div style={{
              height: "120px", background: "#ffffff", borderRadius: "4px",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ fontSize: "1.8rem", opacity: 0.15 }}>{tipo === "escenario" ? "🏙" : "👤"}</span>
              <p style={{ color: "#333", fontSize: "0.6rem", margin: "0.4rem 0 0", letterSpacing: "0.1em", textTransform: "uppercase" }}>PNG</p>
            </div>
          )}
          <p style={{ color: "#888", fontSize: "0.85rem",fontWeight: 700, margin: "0.6rem 0 0", lineHeight: 1.3 }}>{item.nombre}</p>
        </div>
      ))}
    </div>
  );
};

const ProductCard = ({ producto, onAgregar }) => (
  <div style={{
    background: "#daeaef", border: "1px solid #79b5d8",
    borderRadius: "4px", overflow: "hidden",
    display: "flex", flexDirection: "column",
  }}>
    <div style={{ padding: "1.5rem 1.5rem 0", position: "relative" }}>
      {producto.badge && (
        <span style={{
          position: "absolute", top: "1.25rem", left: "1.25rem",
          background: "#93999b", color: "#fff",
          fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.08em",
          padding: "0.2rem 0.6rem", borderRadius: "2px", textTransform: "uppercase",
        }}>
          {producto.badge}
        </span>
      )}
      {producto.imgs ? (
  <ImageCarousel images={producto.imgs} alt={producto.nombre} />
) : producto.img ? (
  <img src={producto.img} alt={producto.nombre} style={{ width: "100%", height: "220px", objectFit: "contain" }} />
) : (
  <PlaceholderImg height={240} label="PNG próximamente" />
)}
    </div>
    <div style={{ padding: "1.25rem 1.5rem 1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
      <h3 style={{ color: "#969595", fontWeight: 800, fontSize: "1.15rem", margin: "0 0 0.4rem" }}>{producto.nombre}</h3>
      <p style={{ color: "#7cb3c4", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 0.75rem" }}>{cop(producto.precio)}</p>
      <p style={{ color: "#777", fontSize: "0.85rem", lineHeight: 1.6, margin: "0 0 1.25rem", flex: 1 }}>{producto.descripcion}</p>
      <button
        onClick={() => onAgregar(producto)}
        style={{
          background: "#8bbfcc", color: "#fff", border: "none",
          padding: "0.65rem 1rem", fontWeight: 700, fontSize: "0.8rem",
          letterSpacing: "0.08em", textTransform: "uppercase",
          cursor: "pointer", borderRadius: "2px", width: "100%", transition: "background 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#89abbb")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#a6bec9")}
      >
        Agregar al carrito
      </button>
    </div>
  </div>
);

const Carrito = ({ items, onEliminar, onCerrar }) => {
  const total = items.reduce((acc, i) => acc + i.precio * i.qty, 0);

  return (
    <div style={{
      position: "fixed", top: 0, right: 0, bottom: 0, width: "320px",
      background: "#ffffff", borderLeft: "1px solid #5d727a",
      zIndex: 1000, display: "flex", flexDirection: "column",
      boxShadow: "-8px 0 32px rgba(138, 128, 128, 0.6)",
    }}>
      <div style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid #2a2a2a", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ color: "#939393", fontWeight: 800, fontSize: "1rem" }}>
          Carrito {items.length > 0 && <span style={{ color: "#89a3bb" }}>({items.reduce((a, i) => a + i.qty, 0)})</span>}
        </span>
        <button onClick={onCerrar} style={{ background: "none", border: "none", color: "#666", fontSize: "1.2rem", cursor: "pointer" }}>✕</button>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "1rem 1.5rem" }}>
        {items.length === 0 ? (
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <p style={{ color: "#444", fontSize: "0.85rem" }}>Tu carrito está vacío</p>
          </div>
        ) : (
          items.map((item) => (
            <div key={item.id} style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem", paddingBottom: "1rem", borderBottom: "1px solid #1e1e1e" }}>
              <div style={{ width: "56px", height: "56px", background: "#b6ccd8", borderRadius: "4px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                {item.img
                  ? <img src={item.img} alt={item.nombre} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                  : <span style={{ color: "#333", fontSize: "1.2rem" }}>📦</span>
                }
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ color: "#969292", fontSize: "0.82rem", fontWeight: 700, margin: "0 0 0.2rem" }}>{item.nombre}</p>
                <p style={{ color: "#8baebe", fontSize: "0.78rem", fontWeight: 700, margin: "0 0 0.3rem" }}>{cop(item.precio)}</p>
                <span style={{ color: "#555", fontSize: "0.72rem" }}>x{item.qty}</span>
              </div>
              <button
                onClick={() => onEliminar(item.id)}
                style={{ background: "none", border: "none", color: "#444", cursor: "pointer", fontSize: "0.85rem", alignSelf: "flex-start" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#6daecc")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
              >✕</button>
            </div>
          ))
        )}
      </div>

      {items.length > 0 && (
        <div style={{ padding: "1.25rem 1.5rem", borderTop: "1px solid #2a2a2a" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
            <span style={{ color: "#646464", fontSize: "0.85rem" }}>Total</span>
            <span style={{ color: "#646464", fontWeight: 800, fontSize: "1rem" }}>{cop(total)}</span>
          </div>
          <button style={{
            width: "100%", background: "#90b6c7", color: "#fff", border: "none",
            padding: "0.75rem", fontWeight: 700, fontSize: "0.85rem",
            letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer", borderRadius: "2px",
          }}>
            Finalizar pedido
          </button>
        </div>
      )}
    </div>
  );
};

export const TiendaPage = () => {
  const [carrito, setCarrito] = useState([]);
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  const agregarAlCarrito = (producto) => {
  const productoCarrito = {
    ...producto,
    img: producto.imgs ? producto.imgs[0] : producto.img,
  };

  setCarrito((prev) => {
    const existe = prev.find((i) => i.id === productoCarrito.id);
    if (existe) return prev.map((i) => i.id === productoCarrito.id ? { ...i, qty: i.qty + 1 } : i);
    return [...prev, { ...productoCarrito, qty: 1 }];
  });
  setCarritoAbierto(true);
};

  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((i) => i.id !== id));
  };

  const totalItems = carrito.reduce((a, i) => a + i.qty, 0);

  return (
    <>
      <Header />

      <section style={{ background: "linear-gradient(160deg, #ffffff 100%)", borderBottom: "2px solid #88a4c4", padding: "3rem 0 2.5rem" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <p style={{ color: "#698592", fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", margin: "0 0 0.5rem" }}>Universo Drekxon</p>
            <h1 style={{ color: "#939393", fontWeight: 900, fontSize: "clamp(1.8rem, 5vw, 3rem)", letterSpacing: "-0.02em", margin: 0 }}>TIENDA OFICIAL</h1>
            <p style={{ color: "#666", fontSize: "0.9rem", margin: "0.5rem 0 0" }}>Coleccionables físicos del cómic El Silencio de Orien</p>
          </div>
          <button
            onClick={() => setCarritoAbierto(true)}
            style={{
              background: totalItems > 0 ? "#a6bec9" : "#a6bec9",
              border: "1px solid #296372", color: "#fdfdfd",
              padding: "0.65rem 1.25rem", borderRadius: "2px",
              fontWeight: 700, fontSize: "0.85rem", cursor: "pointer",
              display: "flex", alignItems: "center", gap: "0.5rem",
              transition: "background 0.2s",
            }}
          >
            🛒 Carrito {totalItems > 0 && (
              <span style={{ background: "#68666660", color: "#ffffff", borderRadius: "50%", width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", fontWeight: 900 }}>
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "4rem 0" }}>
        <div className="container">
          <div className="row g-4">
            {productos.map((p) => (
              <div key={p.id} className="col-12 col-md-6 col-lg-4">
                <ProductCard producto={p} onAgregar={agregarAlCarrito} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#ffffff", borderTop: "1px solid #7ab1ca", padding: "4rem 0" }}>
        <div className="container">
          <p style={{ color: "#87b7ce", fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", margin: "0 0 0.4rem" }}>Caja Sorpresa</p>
          <h2 style={{ color: "#939393", fontWeight: 900, fontSize: "clamp(1.4rem, 4vw, 2rem)", margin: "0 0 0.75rem" }}>¿Qué podrías sacar?</h2>
          <p style={{ color: "#666", fontSize: "0.88rem", margin: "0 0 2.5rem" }}>Desliza para ver todos los escenarios y personajes disponibles.</p>

          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <span style={{ color: "#6e6c6c", fontWeight: 700, fontSize: "1.15rem" }}>Escenarios</span>
              <span style={{ color: "#444", fontSize: "0.85rem" }}>10 disponibles</span>
              <span style={{ color: "#555", fontSize: "0.8rem", marginLeft: "auto" }}>← arrastra →</span>
            </div>
            <Slider items={escenarios} tipo="escenario" />
          </div>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <span style={{ color: "#4b4a4a", fontWeight: 700, fontSize: "1.15rem" }}>Personajes</span>
              <span style={{ color: "#444", fontSize: "0.85rem" }}>5 disponibles</span>
              <span style={{ color: "#555", fontSize: "0.7rem", marginLeft: "auto" }}>← arrastra →</span>
            </div>
            <Slider items={personajes} tipo="personaje" />
          </div>
        </div>
      </section>

      {carritoAbierto && (
        <>
          <div onClick={() => setCarritoAbierto(false)} style={{ position: "fixed", inset: 0, background: "rgba(255, 255, 255, 0.6)", zIndex: 999 }} />
          <Carrito items={carrito} onEliminar={eliminarDelCarrito} onCerrar={() => setCarritoAbierto(false)} />
        </>
      )}

      <Footer />
    </>
  );
};
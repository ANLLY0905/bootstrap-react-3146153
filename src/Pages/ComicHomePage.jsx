import { useNavigate } from "react-router-dom";
import { Header } from "../Componentes/Header";
import { Footer } from "../assets/Footer";
import portada1 from "../assets/Capítulo-1.png";
import portada2 from "../assets/Capítulo-2.png";


const chapters = [
  {
    id: 1,
    title: "Capítulo 1",
    subtitle: "El Origen",
    description: "Todo comenzó en los laboratorios secretos de una élite política sin escrúpulos. Los primeros Drekxon despiertan.",
    pages: 5,
    path: "/comic/capitulo-1",
    portada: portada1,
  },
  {
    id: 2,
    title: "Capítulo 2",
    subtitle: "Caos",
    description: "La humanidad colapsa. Kian y Emilia se encuentran en medio del caos mientras los Drekxon rastrean cada sonido.",
    pages: 5,
    path: "/comic/capitulo-2",
    portada: portada2,
  },
];

export const ComicHomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header/>

      <section style={{ background: "linear-gradient(160deg, #ffffff 0%, #fff2f2 100%)", borderBottom: "2px solid #8b0000", padding: "4rem 0 3rem", margin: 0 }}>
        <div className="container text-center">
          <p style={{ color: "#8b0000", fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Universo Drekxon
          </p>
          <h1 style={{ color: "#939393", fontWeight: 900, fontSize: "clamp(2rem, 6vw, 4rem)", letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: "1.25rem" }}>
            ELIGE TU CAPÍTULO
          </h1>
          <p style={{ color: "#aaa", maxWidth: "500px", margin: "0 auto", fontSize: "0.95rem" }}>
            Una historia de poder, traición y supervivencia. Cada capítulo es una escena interactiva.
          </p>
        </div>
      </section>

      <section style={{ background: "#939393", minHeight: "60vh", padding: "4rem 0", margin: 0,  }}>
        <div className="container">
          <div className="row g-4 justify-content-center">
            {chapters.map((ch) => (
              <div key={ch.id} className="col-12 col-md-6 col-lg-5">
                <div
                  onClick={() => navigate(ch.path)}
                  style={{ background: "#ffffff", border: "1px solid #2a2a2a", borderRadius: "4px", overflow: "hidden", cursor: "pointer", transition: "border-color 0.2s, transform 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#8b0000"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#2a2a2a"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  {ch.portada ? (
  <img
    src={ch.portada}
    alt={`Portada ${ch.title}`}
    style={{ width: "100%", height: "400px", objectFit: "cover" }}
  />
) : (
  <div style={{
    height: "280px",
    background: "linear-gradient(135deg, #1a0000 0%, #0d0d0d 50%, #0a0a1a 100%)",
    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
    position: "relative", overflow: "hidden",
  }}>
    <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(139,0,0,0.04) 30px, rgba(139,0,0,0.04) 31px)" }} />
    <span style={{ fontSize: "5rem", fontWeight: 900, color: "rgba(139,0,0,0.15)", lineHeight: 1, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
      {String(ch.id).padStart(2, "0")}
    </span>
    <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
      <div style={{ width: "48px", height: "2px", background: "#8b0000", margin: "0 auto 1rem" }} />
      <p style={{ color: "#555", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", margin: 0 }}>Portada próximamente</p>
    </div>
  </div>
)}
          

                  {/* Info */}
                  <div style={{ padding: "1.5rem" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "0.5rem" }}>
                      <span style={{ color: "#8b0000", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>{ch.title}</span>
                      <span style={{ color: "#333", fontSize: "0.7rem" }}>{ch.pages} escenas</span>
                    </div>
                    <h3 style={{ color: "#949494", fontWeight: 800, fontSize: "1.4rem", margin: "0 0 0.75rem", letterSpacing: "-0.01em" }}>{ch.subtitle}</h3>
                    <p style={{ color: "#888", fontSize: "0.88rem", lineHeight: 1.6, margin: "0 0 1.5rem" }}>{ch.description}</p>
                    <button
                      style={{ background: "#8b0000", color: "#fff", border: "none", padding: "0.6rem 1.5rem", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", borderRadius: "2px", width: "100%", transition: "background 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#a00000")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "#8b0000")}
                    >
                      Leer capítulo →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
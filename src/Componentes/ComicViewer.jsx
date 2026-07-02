import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "../assets/Footer";

export const ComicViewer = ({ chapterNumber, chapterTitle, scenes, nextChapterPath }) => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [animDir, setAnimDir] = useState(null);

  const scene = scenes[current];
  const isFirst = current === 0;
  const isLast = current === scenes.length - 1;

  const go = (dir) => {
    setAnimDir(dir);
    setTimeout(() => {
      setCurrent((prev) => (dir === "right" ? prev + 1 : prev - 1));
      setAnimDir(null);
    }, 180);
  };

  return (
    <>
      <Header />

      <div style={{ background: "#ffffff", borderBottom: "1px solid #8a1111", padding: "0.6rem 0" }}>
        <div className="container d-flex align-items-center justify-content-between" style={{ flexWrap: "wrap", gap: "0.5rem" }}>
          <button onClick={() => navigate("/comic/portada")} style={{ background: "none", border: "none", color: "#666", fontSize: "0.8rem", cursor: "pointer", padding: 0 }}>
            ← Volver a capítulos
          </button>
          <span style={{ color: "#8b0000", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Capítulo {chapterNumber} — {chapterTitle}
          </span>
          <span style={{ color: "#2e2323", fontSize: "0.75rem" }}>{current + 1} / {scenes.length}</span>
        </div>
      </div>

      <section style={{ background: "#f3ecec", minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", padding: "2rem 1rem" }}>

        <div style={{ display: "flex", gap: "6px", marginBottom: "2rem" }}>
          {scenes.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? "28px" : "8px", height: "8px", borderRadius: "4px", background: i === current ? "#8b0000" : i < current ? "#4a0000" : "#2a2a2a", border: "none", cursor: "pointer", transition: "all 0.25s", padding: 0 }} />
          ))}
        </div>

        <div style={{ width: "100%", maxWidth: "1600px", opacity: animDir ? 0 : 1, transform: animDir === "right" ? "translateX(-30px)" : animDir === "left" ? "translateX(30px)" : "none", transition: "opacity 0.18s, transform 0.18s" }}>
          
          <div
 
  style={{
    width: "100%",
    minHeight: "810px",
    borderRadius: "4px 4px 0 0",
    border: "1px solid #222",
    position: "relative",
    overflow: "hidden"    // ← hidden en lugar de auto
  }}
>
  {scene.component ? (
    scene.component
  ) : (
    <>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: scene.bg || "#111"
        }}
      />

      <span
        style={{
          position: "absolute",
          bottom: "1rem",
          right: "1.25rem",
          color: "rgba(224,190,190,0.2)",
          fontSize: "4rem",
          fontWeight: 900
        }}
      >
        {String(current + 1).padStart(2, "0")}
      </span>
    </>
  )}
</div>

          {/* Dialogue box */}
          <div style={{ background: "#c0c0c0", border: "1px solid #916868", borderTop: "none", borderRadius: "0 0 4px 4px", padding: "1.5rem" }}>
            <p style={{ color: "#666", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.4rem" }}>{scene.title}</p>
            {scene.narration && (
              <p style={{ color: "#140b0b", fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.65, borderLeft: "2px solid #8b0000", paddingLeft: "0.85rem", marginBottom: scene.dialogue?.length ? "1rem" : 0 }}>
                {scene.narration}
              </p>
            )}
            {scene.dialogue?.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {scene.dialogue.map((line, i) => (
                  <div key={i} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                    <span style={{ color: "#4b45459a", fontWeight: 700, fontSize: "0.78rem", whiteSpace: "nowrap", minWidth: "70px", paddingTop: "0.1rem" }}>{line.speaker}:</span>
                    <span style={{ color: "#ffffff", fontSize: "0.88rem", lineHeight: 1.55 }}>{line.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Nav buttons */}
        <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
          <button onClick={() => go("left")} disabled={isFirst} style={{ background: isFirst ? "#1a1a1a" : "#222", color: isFirst ? "#333" : "#fff", border: "1px solid #2a2a2a", padding: "0.65rem 1.5rem", cursor: isFirst ? "default" : "pointer", borderRadius: "2px", fontWeight: 600, fontSize: "0.85rem" }}>
            ← Anterior
          </button>
          {!isLast ? (
            <button onClick={() => go("right")} style={{ background: "#8b0000", color: "#fff", border: "none", padding: "0.65rem 1.5rem", cursor: "pointer", borderRadius: "2px", fontWeight: 700, fontSize: "0.85rem" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#a00000")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#8b0000")}
            >
              Siguiente →
            </button>
          ) : nextChapterPath ? (
            <button onClick={() => navigate(nextChapterPath)} style={{ background: "#8b0000", color: "#fff", border: "none", padding: "0.65rem 1.5rem", cursor: "pointer", borderRadius: "2px", fontWeight: 700, fontSize: "0.85rem" }}>
              Siguiente capítulo →
            </button>
          ) : (
            <button onClick={() => navigate("/comic/portada")} style={{ background: "#222", color: "#fff", border: "1px solid #8b0000", padding: "0.65rem 1.5rem", cursor: "pointer", borderRadius: "2px", fontWeight: 700, fontSize: "0.85rem" }}>
              Ver todos los capítulos
            </button>
          )}
        </div>
        <p style={{ color: "#949494", fontSize: "0.72rem", marginTop: "1.25rem" }}>Usa ← → para navegar entre escenas</p>
      </section>

      <Footer />
    </>
  );
};
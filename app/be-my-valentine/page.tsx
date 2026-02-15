"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";

export default function BeMinePage() {
  const [yes, setYes] = useState(false);
  const [noMoves, setNoMoves] = useState(0);

  function moveNo() {
    setNoMoves((n) => n + 1);
  }

  const noStyle = () => {
    // playful “no” button dodge
    const x = Math.max(-140, Math.min(140, (Math.random() - 0.5) * 320));
    const y = Math.max(-90, Math.min(90, (Math.random() - 0.5) * 220));
    return { transform: `translate(${x}px, ${y}px)` };
  };

  return (
    <main className="container" style={{ position: "relative", zIndex: 1 }}>
      <div className="card glowCard" style={{ textAlign: "center", padding: 26 }}>
        <div className="label">One question</div>

        <h2 style={{ margin: "10px 0 6px", fontFamily: "var(--font-playfair)", fontSize: 44 }}>
          Be my Valentine everyday?
        </h2>
        <p className="muted" style={{ marginTop: 0 }}>
          No pressure but also, yes pressure you can't say no😌
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 16 }}>
          <button className="btn btnGold" onClick={() => setYes(true)}>
            <Heart size={18} /> Yes
          </button>

          <button
            className="btn"
            onMouseEnter={moveNo}
            onClick={moveNo}
            style={noMoves ? noStyle() : undefined}
            aria-label="No (playful)"
          >
            No
          </button>
        </div>

        <AnimatePresence>
          {yes && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.35 }}
              style={{ marginTop: 18 }}
            >
              <div className="card" style={{ borderColor: "rgba(214,179,90,.28)", background: "rgba(214,179,90,.06)" }}>
                <div style={{ fontFamily: "var(--font-vibes)", fontSize: 44, marginBottom: 6 }}>
                  You said yes ✨
                </div>
                <div className="muted" style={{ lineHeight: 1.7 }}>
                  Now come here and give daddy a kiss😙❤️.
                </div>
                <div style={{ marginTop: 14 }}>
                  <Link className="btn btnGold" href="/yes">
                    See the surprise <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="footerNote">
          I love you okay? <b> You matter</b> and <b>Stop doubting it ❤️</b>.
        </div>
      </div>
    </main>
  );
}

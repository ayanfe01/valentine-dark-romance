"use client";

import { motion } from "framer-motion";

export default function TimelinePage() {
  
    const events = [
        {
          date: "The first message",
          title: "An unexpected notification",
          body:
            "We met online thanks to Big Jay(James). Immediately knew I fuck with you. It wasn't dramatic movie moment. Just a message that turned into something that mattered."
        },
        {
          date: "Late night conversations",
          title: "Getting comfortable",
          body:
            "Somehow hours would pass without us noticing. Random topics. Deep topics. Silence that still felt connected. I remembeer always leaving my room to sit on the stairs in bells so our convos wouldn't be interrupted"
        },
        {
          date: "The first disagreement",
          title: "Realness",
          body:
            "We learned neither of us is perfect. But even in tension, we didn’t completely walk away. That counts."
        },
        {
          date: "The distance",
          title: "Not physical but still real",
          body:
            "We haven’t met in person yet. But connection isn’t only measured in proximity. It’s measured in intention."
        },
        {
          date: "Right now",
          title: "This website",
          body:
            "I may not do Valentine’s traditionally. But I built this for you. And that means something."
        }
      ];

  return (
    <main className="container" style={{ position: "relative", zIndex: 1 }}>
      <div className="card glowCard">
        <div className="label">Timeline</div>
        <h2 style={{ margin: "8px 0 10px", fontFamily: "var(--font-playfair)", fontSize: 34 }}>
          Our little history.
        </h2>
        <p className="muted" style={{ marginTop: 0 }}>
          Real moments I don't remember the dates but I remeber the moments❤️.
        </p>

        <div className="timeline">
          {events.map((e, i) => (
            <motion.div
              key={i}
              className="tItem"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.55 }}
            >
              <div className="tDate">{e.date}</div>
              <div className="tBox">
                <div style={{ fontWeight: 750, letterSpacing: ".2px" }}>{e.title}</div>
                <div className="muted" style={{ marginTop: 6, lineHeight: 1.65 }}>
                  {e.body}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="footerNote">
          I love you and you matter❤️.
        </div>
      </div>
    </main>
  );
}

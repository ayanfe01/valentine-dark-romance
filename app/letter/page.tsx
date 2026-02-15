"use client";

import { useMemo } from "react";
import RevealLines from "@/components/RevealLines";
import { motion } from "framer-motion";

export default function LetterPage() {
  const toName = "My Baby";

  const lines = useMemo(
    () => [
      "Kudiratu Mi, My Kudirat 😂😂❤️",
      "",
      "I need to start this by saying something honestly…",
      "",
      "You already know I dont really do Valentines Day thing.",
      "Ive never been the type to follow trends or show love on a specific date just because everybody is doing it.",
      "But seeing you sad and gloomy all day? I didnt like it at all.",
      "",
      "Not because of the flowers.",
      "Not because of gifts.",
      "But because it made me realize something important.",
      "",
      "You felt like you weren't loved enough or important enough.",
      "",
      "And the truth is you are anything but that to me.",
      "",
      "Kudiratu mi, you are not a one-day celebration.",
      "You are not a seasonal affection.",
      "You are not a February 14th obligation.",
      "",
      "You are someone I value in quiet moments.",
      "In random thoughts.",
      "In the way your name crosses my mind unexpectedly and makes me smile when you are not stressing my life sha.",
      "",
      "I may not show love in traditional ways.",
      "I may not always follow trends people be doing nowadays.",
      "But what I do feel? Its real.",
      "",
      "And I dont want you ever questioning your importance in my life.",
      "",
      "So instead of buying something temporary…",
      "",
      "I built something.",
      "",
      "Because I wanted to create something that lasts longer than flowers.",
      "Something intentional.",
      "Something that required time, thought, and effort.",
      "Something that says, “You matter to me enough for me to sit down and build this with my own hands.”",
      "",
      "I shouldn't have stopped building this when I got mad at you — at least it would've been more special than it is right now, but shit happens.",
      "",
      "This website is not about Valentines Day.",
      "",
      "Its about you.",
      "",
      "Its about the fact that you deserve reassurance.",
      "You deserve effort.",
      "You deserve to feel chosen not just on holidays, but on ordinary days too.",
      "",
      "Im still learning how to love better.",
      "Im still learning how to express myself in ways that make you feel secure and appreciated.",
      "",
      "But please know this:",
      "",
      "You are important to me.",
      "You are not an afterthought.",
      "And your feelings matter.",
      "",
      "Maybe I dont celebrate Valentines the way the world does.",
      "",
      "But if love means paying attention when youre hurting…",
      "If love means adjusting when I see youre affected…",
      "If love means building something from scratch just to make you smile…",
      "",
      "Then I am learning to do love in my own way.",
      "",
      "And Im choosing you in that way.",
      "",
      "Lets try this Valentine thing again next year",
      "",
      "Love of your life Ayanfe ❤️",
      "— 💌",
    ],
    []
  );

  return (
    <main className="container" style={{ position: "relative", zIndex: 1 }}>
      <div className="card glowCard" style={{ padding: 22 }}>
        <div className="label">Letter</div>
        <h2
          style={{
            margin: "8px 0 14px",
            fontFamily: "var(--font-playfair)",
            fontSize: 34,
          }}
        >
          For you in Dark Romance I can be romantic too😌❤️.
        </h2>

        {/* Music plays globally via app/layout.tsx (GlobalAudio component). */}
        <RevealLines lines={lines} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.7 }}
          style={{ marginTop: 18 }}
        >
          <div
            className="card"
            style={{
              background: "rgba(214,179,90,.06)",
              borderColor: "rgba(214,179,90,.20)",
            }}
          >
            <div className="label">Small promise</div>
            <div className="bigQuote" style={{ margin: 0 }}>
              “I’ll love you gently and I’ll love you on purpose❤️.”
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
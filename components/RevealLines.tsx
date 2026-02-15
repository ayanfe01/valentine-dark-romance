"use client";

import { motion } from "framer-motion";

export default function RevealLines({ lines }: { lines: string[] }) {
  return (
    <div style={{ display: "grid", gap: 10 }}>
      {lines.map((line, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 + idx * 0.18, duration: 0.6, ease: "easeOut" }}
          style={{
            fontSize: 18,
            color: "rgba(246,241,231,.92)",
            lineHeight: 1.55,
          }}
        >
          {line}
        </motion.div>
      ))}
    </div>
  );
}

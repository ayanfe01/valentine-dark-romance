"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function YesPage() {
  return (
    <main className="container" style={{ position: "relative", zIndex: 1 }}>
      <div className="spark" aria-hidden="true" />
      <div className="card glowCard" style={{ textAlign: "center", padding: 30 }}>
        <div className="label">Final</div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: "var(--font-playfair)", fontSize: 46, lineHeight: 1.05, marginTop: 10 }}
        >
          I choose you.
          <br />
          <span style={{ color: "var(--gold)" }}>Today.</span> Tomorrow. Always❤️.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.55 }}
          style={{ marginTop: 16, color: "rgba(246,241,231,.78)", lineHeight: 1.7, fontSize: 16 }}
        >
          If you ever forget how loved you are,
          <br />
          come back here and read this again.
        </motion.div>

        <div style={{ marginTop: 18 }}>
          <Link className="btn" href="/">
            <ArrowLeft size={18} /> Back home
          </Link>
        </div>
      </div>
    </main>
  );
}

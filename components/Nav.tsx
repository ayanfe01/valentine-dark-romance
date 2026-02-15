"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft, Heart, ScrollText, Clock, Lock } from "lucide-react";

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();

  // Hide Back button on landing page
  const showBack = pathname !== "/";

  return (
    <div className="nav">
      <div className="navInner">
        {/* Left side: Back button (only not on home) */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {showBack && (
            <button
              type="button"
              onClick={() => router.back()}
              className="pill"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 14px",
                borderRadius: 999,
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.10)",
                cursor: "pointer",
              }}
              title="Back"
            >
              <ArrowLeft size={16} />
              Back
            </button>
          )}
        </div>

        {/* Brand */}
        <Link href="/" className="brand">
          <span className="brandMark" />
          <span style={{ letterSpacing: ".08em" }}>Our Makeshift Valentine</span>
        </Link>

        {/* Right side: Navigation pills */}
        <div className="pillRow">
          <Link className="pill" href="/letter">
            <ScrollText size={14} style={{ marginRight: 6 }} />
            Letter
          </Link>

          <Link className="pill" href="/timeline">
            <Clock size={14} style={{ marginRight: 6 }} />
            Timeline
          </Link>

          <Link className="pill" href="/secret">
            <Lock size={14} style={{ marginRight: 6 }} />
            Secrets
          </Link>

          <Link className="pill" href="/be-my-valentine">
            <Heart size={14} style={{ marginRight: 6 }} />
            Be Mine
          </Link>
        </div>
      </div>
    </div>
  );
}
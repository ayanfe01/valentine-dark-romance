import Link from "next/link";
import { ArrowRight, Music } from "lucide-react";

export default function Home() {
  return (
    <main className="container" style={{ position: "relative", zIndex: 1 }}>
      <section className="hero">
        <div>
          <h1 className="title" style={{ fontFamily: "var(--font-playfair)" }}>
            A Valentine
            <br />
            <span style={{ color: "var(--gold)", textShadow: "var(--shadowGold)" }}>in the Dark</span>
          </h1>
          <p className="subtitle">
            A quiet, luxurious little corner of the internet made for you Melody my baby.
            I know you love dark Romance hence the theme.
          </p>

          <div className="ctaRow">
            <Link className="btn btnGold" href="/letter">
              Open the letter <ArrowRight size={18} />
            </Link>
            <Link className="btn" href="/be-my-valentine">
              Be my Valentine <ArrowRight size={18} />
            </Link>
            <a className="btn" href="#music">
              Music <Music size={18} />
            </a>
          </div>

          <div className="grid3">
            <div className="card">
              <div className="label">Mood</div>
              <div className="bigQuote">“Luxury romance.”</div>
              <div className="muted">Dark background, gold accents, red glow.</div>
            </div>
            <div className="card">
              <div className="label">Vibe</div>
              <div className="bigQuote">“Soft power.”</div>
              <div className="muted">Affection that feels safe, calm, and certain.</div>
            </div>
            <div className="card">
              <div className="label">Ending</div>
              <div className="bigQuote">“Choose you.”</div>
              <div className="muted">A final question yes/no question click no I dare you.</div>
            </div>
          </div>
        </div>

        <div className="card glowCard">
          <div className="label">Tonight’s note</div>
          <div className="bigQuote" style={{ fontFamily: "var(--font-vibes)", fontSize: 34 }}>
            <span className="type">“I made this for you Melody❤️.”</span>
          </div>
          <p className="muted" style={{ marginTop: 12 }}>
            You are my baby and you matter❤️.
          </p>

          <div id="music" style={{ marginTop: 14 }}>
            <div className="label">My Song Choice</div>
            <p className="muted" style={{ marginTop: 8 }}>
             Since you did not want to tell me your favourite I decided to go with Giveon wanted to do Mannywellz but was not feeling it.
              I hope you enjoy it <b>The song might not autoplay depending on your browser just click anywhere on your screen.</b>.
            </p>
          </div>

          <div className="footerNote">
            I love you ❤️
          </div>
        </div>
      </section>
    </main>
  );
}

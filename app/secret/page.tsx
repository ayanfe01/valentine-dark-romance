"use client";

import { useState } from "react";
import Modal from "@/components/Modal";
import { HeartHandshake, Gem, Lock, Sparkles } from "lucide-react";

export default function SecretPage() {
  const [open, setOpen] = useState<null | "why" | "love" | "future" | "secret">(null);

  return (
    <main className="container" style={{ position: "relative", zIndex: 1 }}>
      <div className="card glowCard">
        <div className="label">Secrets</div>
        <h2 style={{ margin: "8px 0 12px", fontFamily: "var(--font-playfair)", fontSize: 34 }}>
          Little doors. Big feelings.
        </h2>
        <p className="muted" style={{ marginTop: 0 }}>
          Tap a button, each one opens a message. .
        </p>

        <div className="ctaRow" style={{ marginTop: 14 }}>
          <button className="btn btnGold" onClick={() => setOpen("why")}>
            <HeartHandshake size={18} /> Why I chose you
          </button>
          <button className="btn" onClick={() => setOpen("love")}>
            <Gem size={18} /> What I love about you
          </button>
          <button className="btn" onClick={() => setOpen("future")}>
            <Sparkles size={18} /> Our future
          </button>
          <button className="btn" onClick={() => setOpen("secret")}>
            <Lock size={18} /> A secret
          </button>
        </div>

        <Modal open={open === "why"} title="Why I chose you" onClose={() => setOpen(null)}>
          You felt safe. Not boring safe <i>rare</i> safe. Like I could be myself without stressing. You always had stories and you always listened to mine.
          <br /><br />
          You made love feel good and I dont take that for granted. Even though now you have almost killed me
        </Modal>

        <Modal open={open === "love"} title="What I love about you" onClose={() => setOpen(null)}>
          • The way you show up when it matters.<br />
          • Your voice especially when you talk in that baby voice.<br />
          • The part of you that tries, even when you’re tired.<br />
          • That you cute smile.<br />
          • That your happy skip you do sometimes, its so cuteeeeeee. <br />
          • Your selflessness your willingness to put others before yourself. <br />
          • Though you're a stubborn goat you still listen and try to make changes. < br />
          • I could go on and on but I will stop here. <br />
        </Modal>

        <Modal open={open === "future"} title="Our future" onClose={() => setOpen(null)}>
          I want the kind of love that lasts the kind we build on purpose.
          <br /><br />
          More laughter. More softness. More “we got this. Most importantly more honesty it's not like I’ll beat you or anything and Less trying to take my life😔”
        </Modal>

        <Modal open={open === "secret"} title="A secret" onClose={() => setOpen(null)}>
          Sometimes I look at you and think:
          <br />
          <b>“How did we get here how did I get so hooked on this witch that wants to kill me, She's my baby and I love her so much ”</b>
        </Modal>
      </div>
    </main>
  );
}

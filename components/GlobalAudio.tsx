"use client";

import { useEffect, useRef, useState } from "react";
import { Music2, Volume2, VolumeX } from "lucide-react";

export default function GlobalAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  // Browser-safe autoplay: starts after first interaction anywhere
  useEffect(() => {
    const start = () => {
      const audio = audioRef.current;
      if (!audio) return;

      audio.volume = 0.35;
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {
          // If blocked, user can press the button
        });

      setReady(true);
      window.removeEventListener("click", start);
      window.removeEventListener("touchstart", start);
      window.removeEventListener("keydown", start);
    };

    window.addEventListener("click", start);
    window.addEventListener("touchstart", start);
    window.addEventListener("keydown", start);

    return () => {
      window.removeEventListener("click", start);
      window.removeEventListener("touchstart", start);
      window.removeEventListener("keydown", start);
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.volume = 0.35;
      try {
        await audio.play();
        setPlaying(true);
      } catch {}
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      {/* CHANGE THIS if you rename the file */}
      <audio ref={audioRef} src="/Like-I-Want-You.mp3" preload="auto" loop />

      {/* Small floating control button (shows on all pages) */}
      <button
        onClick={toggle}
        type="button"
        title={playing ? "Pause music" : "Play music"}
        style={{
          position: "fixed",
          right: 16,
          bottom: 16,
          zIndex: 9999,
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 12px",
          borderRadius: 999,
          border: "1px solid rgba(255,255,255,.12)",
          background: "rgba(10,10,14,.55)",
          backdropFilter: "blur(10px)",
          color: "rgba(246,241,231,.92)",
          cursor: "pointer",
          boxShadow: "0 0 24px rgba(255,42,109,.18)",
        }}
      >
        <Music2 size={18} />
        <span style={{ fontSize: 13, opacity: 0.9 }}>
          {playing ? "Music on" : ready ? "Music off" : "Tap to enable"}
        </span>
        {playing ? <Volume2 size={18} /> : <VolumeX size={18} />}
      </button>
    </>
  );
}
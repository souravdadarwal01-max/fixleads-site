"use client";

import { useEffect } from "react";

const allowedSections = new Set(["niches", "how-it-works", "pricing", "faq"]);

export default function SectionRedirect() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const section = params.get("section");
    if (!section || !allowedSections.has(section)) return;

    const cleanUrl = window.location.pathname;
    const scrollToSection = () => {
      const target = document.getElementById(section);
      if (!target) return false;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", cleanUrl);
      return true;
    };

    if (scrollToSection()) return;
    const frame = window.requestAnimationFrame(() => {
      scrollToSection();
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return null;
}

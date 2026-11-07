"use client";

import { useEffect } from "react";

export default function SectionLink({ section, className, children }) {
  useEffect(() => {
    const pending = window.sessionStorage.getItem("fixleads-scroll-section");
    if (!pending || window.location.pathname !== "/") return;
    window.sessionStorage.removeItem("fixleads-scroll-section");
    window.requestAnimationFrame(() => {
      document.getElementById(pending)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  function handleClick(event) {
    event.preventDefault();
    const menu = event.currentTarget.closest("details.mobile-menu");
    if (menu) menu.open = false;

    if (window.location.pathname !== "/") {
      window.sessionStorage.setItem("fixleads-scroll-section", section);
      window.location.assign("/");
      return;
    }

    document.getElementById(section)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <button type="button" className={className || "section-nav-link"} onClick={handleClick}>
      {children}
    </button>
  );
}

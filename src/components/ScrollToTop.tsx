"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);
  const [previousScroll, setPreviousScroll] = useState(0);

  useEffect(() => {
    // Need to use a ref or closure to capture previous scroll correctly,
    // but the easiest way is to track it in the scroll event listener itself.
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      setShowButton(window.scrollY > 0 && lastScrollY < window.scrollY);
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showButton) return null;

  return (
    <div className="button-up">
      <button onClick={scrollToTop}>
        <i className="fa fa-arrow-up" />&nbsp;&nbsp;Scroll to top
      </button>
    </div>
  );
}

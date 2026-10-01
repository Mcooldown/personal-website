"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import config from "@/data/config.js";
import "./navbar.scss";

export default function Navbar() {
  const [visibleShadow, setVisibleShadow] = useState(false);

  useEffect(() => {
    const handlePageScroll = () => {
      setVisibleShadow(window.scrollY > 10);
    };

    window.addEventListener("scroll", handlePageScroll);
    return () => window.removeEventListener("scroll", handlePageScroll);
  }, []);

  return (
    <nav className={`v-navbar ${visibleShadow ? "visible-shadow" : ""}`}>
      <div className="v-navbar__container section-wrapper">
        <Link href="/">
          <Image
            src="/logo.png"
            className="v-navbar__logo"
            alt="Logo"
            width={100}
            height={32}
            style={{ width: "auto" }} // Preserve aspect ratio based on height in SCSS
          />
        </Link>
        <div className="v-navbar__list">
          {config.contacts.map((contact, index) => (
            <a
              key={`nav-item-contact-${index + 1}`}
              href={contact.link}
              className="list__item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`fa-2x ${contact.icon}`} />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

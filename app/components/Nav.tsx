"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "../styles/layout.module.css";

export const Nav = () => {
  const pathname = usePathname();
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/verify", label: "Verify" },
    { href: "/quotes", label: "Quotes" },
    { href: "/timer", label: "Timer" },
  ]

  return (
    <nav className={styles.nav}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          className={`${styles.link} ${pathname === item.href ? styles.active : ""}`}
          href={item.href}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};



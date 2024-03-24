import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div>
      <Link href="/projects">Projects</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
};

export default Nav;

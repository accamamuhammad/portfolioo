import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>Projects</h1>
      <Link href="/projects/projectOne">Main Project</Link>
    </div>
  );
};

export default page;

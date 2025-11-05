import React from "react";
import Image from "next/image";
import Link from "next/link";
import LocusLogo from "../../../../assets/locus-thumbtack-black.png";

export default function Logo() {
  return (
    <Link href="/" className="flex gap-4 items-center">
      <Image src={LocusLogo} alt="Locus Logo" width={48} height={48} />
      <p className="comic-relief text-slate-700 text-3xl">locus</p>
    </Link>
  );
}

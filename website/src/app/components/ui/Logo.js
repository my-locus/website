import React from "react";
import Image from "next/image";
import LocusLogo from "../../assets/locus-thumbtack-black.png";

export default function Logo() {
  return (
    <div className="flex gap-4 items-center">
      <Image src={LocusLogo} alt="Locus Logo" width={48} height={48} />
      <p className="comic-relief text-3xl">Locus</p>
    </div>
  );
}

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="max-w-7xl mx-auto border-t px-4 w-full flex items-center  justify-center">
      <div className="flex justify-between py-8">
        <p className="text-primary tracking-tight">
          Designed With 💙 by <Link href={"https://x.com/l_fahadkhan_l"} className="font-black">𝕏</Link>
        </p>
      </div>
    </section>
  );
};

export default Footer;

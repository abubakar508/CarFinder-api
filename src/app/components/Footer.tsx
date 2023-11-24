import React from "react";

//import link
import Link from "next/link";

//Import footer data
import { FooterData } from "../constants";
import Logo from "./Logo";

//types for footer data
interface FooterColumnProps {
  title: string;
  link: Array<string>;
}

const FooterColumn = ({ title, link }: FooterColumnProps) => {
  return (
    <div className=" font-montserrat flex flex-col gap-2 p-2 m-2 justify-center text-center">
      <span className=" font-bold text-black">{title}</span>
      <div className=" flex flex-col gap-2 p-1">
        {link.map((link: string) => {
          return (
            <Link href="/" className=" text-slate-600 hover:text-blue-500">
              {link}
            </Link>
          );
        })}
      </div>
    </div>
  );``
};
const Footer = () => {
  return (
    <footer className=" border-t border-emerald-600 flex flex-col">
      <Logo />
      <section className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <FooterColumn title={FooterData[0].title} link={FooterData[0].link} />
        </div>
        <div>
          <FooterColumn title={FooterData[1].title} link={FooterData[1].link} />
        </div>
        <div>
          <FooterColumn title={FooterData[2].title} link={FooterData[2].link} />
        </div>
        <div>
          <FooterColumn title={FooterData[3].title} link={FooterData[3].link} />
        </div>
        <div>
          <FooterColumn title={FooterData[4].title} link={FooterData[4].link} />
        </div>
        <div>
          <FooterColumn title={FooterData[5].title} link={FooterData[5].link} />
        </div>
        <div>
          <FooterColumn title={FooterData[6].title} link={FooterData[6].link} />
        </div>
        <div>
          <FooterColumn title={FooterData[7].title} link={FooterData[7].link} />
        </div>
        <div>
          <FooterColumn title={FooterData[8].title} link={FooterData[8].link} />
        </div>
      </section>
      <div className=" font-bold text-black flex justify-between px-2 pb-3">
        <div>
          <p>All Rights Reserved</p>
        </div>
        <div>
          <p>Open to a freelancing job?</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

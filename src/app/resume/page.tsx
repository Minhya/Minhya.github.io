import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Resumé" };

export default function ResumePage() {
  return (
    <section className="resume-page">
      <div className="resume-heading">
        <h1 className="section-title">Resumé</h1>
        <a className="outline-link" href="/anna-nguyen-resume.pdf" download>Download PDF</a>
      </div>
      <div className="resume-document">
        <Image src="/resume/page-1.png" alt="Anna Nguyen’s CV. Download the PDF for selectable text and document links." width={1191} height={1685} sizes="(max-width: 760px) 100vw, 1000px" priority />
      </div>
    </section>
  );
}

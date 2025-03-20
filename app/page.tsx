import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="border border-b-blue-600">
        <section id="summary">
          <div className="grid gap-6 sm:flex">
            <div>image placeholder</div>
            <div>summary</div>
          </div>
        </section>
        <nav>
          <ul className="flex gap-4">
            <li>Jump to:</li>
            <li>
              <Link href="/#experience">Experience</Link>
            </li>
            <li>
              <Link href="/#education">Education</Link>
            </li>
          </ul>
        </nav>
        <section id="experience" className="border border-b-cyan-500">
          Experience
        </section>
        <section id="education" className="border border-b-emerald-700">
          Education
        </section>
      </div>
    </>
  );
}

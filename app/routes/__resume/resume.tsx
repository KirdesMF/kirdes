import { CSSProperties } from 'react';
import { Link } from 'remix';
import { ElasticLine } from '~/components/elastic-line';
import { TextPanel } from '~/components/text-panel';

import styles from '~/css/routes/resume.css';

export const links = () => [{ rel: 'stylesheet', href: styles }];

export default function Resume() {
  return (
    <main className="wrapper grid gap-$clamp-size-2xl py-$clamp-size-2xl">
      <div className="flex gap-x-xs items-baseline">
        <h1 className="text-clamp-xl font-black">Resume</h1>
        <ElasticLine />
      </div>

      <TextPanel content="Timeline" />

      <section>
        <ul className="timeline">
          <div className="timeline__line"></div>
          {Array.from({ length: 6 }).map((_, idx) => {
            return (
              <li
                key={idx}
                style={{ '--row': idx + 1 } as CSSProperties}
                className="grid grid-rows-[2rem_min-content] gap-y-2 px-4 py-6 border-$dark-black border-3"
              >
                <div className="flex items-baseline gap-x-2">
                  <h2 className="font-secondary font-thin">Title</h2>
                  <strong>Year</strong>
                </div>
                <p>Description du poste.</p>
              </li>
            );
          })}
        </ul>
      </section>

      <TextPanel content="Bonus" />
      <section>
        <ul>
          <li>Website Association musicale</li>
          <li>Website Freelance formateur</li>
        </ul>
      </section>

      <TextPanel content="PDF Resume" />

      <section className="min-h-100vh">
        <iframe
          width="100%"
          height="100%"
          src="/resume.pdf"
          title="test"
        ></iframe>
      </section>

      <Link to="/">Home</Link>
    </main>
  );
}

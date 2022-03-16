import { Link, useLoaderData } from 'remix';
import { ElasticLine } from '~/components/elastic-line';
import { TextPanel } from '~/components/text-panel';
import { resume } from '~/data/data';

import type { ResumeData } from '~/data/data';
import type { CSSProperties } from 'react';

import styles from '~/css/routes/resume.css';
/**
 *
 *
 *
 *
 */

export const meta = () => ({
  title: 'Cédric Gourville - Resume',
});

/**
 *
 *
 *
 *
 */
export const links = () => [{ rel: 'stylesheet', href: styles }];

/**
 *
 *
 *
 *
 */
export const loader = () => resume.reverse();

export default function Resume() {
  const datas = useLoaderData<Array<ResumeData>>();

  return (
    <main className="wrapper grid gap-$clamp-size-2xl py-$clamp-size-2xl">
      <div className="flex gap-x-xs items-baseline">
        <h1 className="text-clamp-xl font-black">
          Resume <span className="text-sm">🚧</span>
        </h1>
        <ElasticLine />
      </div>

      <Link to="/">Home</Link>
      <TextPanel content="Timeline" />

      <section>
        <div className="timeline">
          <div className="timeline__line grid place-items-center"></div>
          {datas.map((data, idx) => {
            return (
              <div
                key={idx}
                style={{ '--row': idx + 1 } as CSSProperties}
                className="timeline__panel grid gap-y-2  bg-$body-bg border-$dark-black border-3 shadow-card"
              >
                <div className="flex items-baseline gap-x-4 p-4 border-bottom-2 border-$dark-black">
                  <h2 className="text-base">{data.job}</h2>
                  <em className="font-secondary">
                    {data.start} - {data.end}
                  </em>
                </div>
                <ul className="list-disc ml-4 p-4">
                  {data.description.map((desc, idx) => {
                    return (
                      <li className="font-light text-sm" key={idx}>
                        {desc}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <TextPanel content="PDF Resume coming soon" />

      {/* <section className="min-h-100vh">
        <iframe
          width="100%"
          height="100%"
          src="/resume.pdf"
          title="test"
        ></iframe>

      </section> */}
    </main>
  );
}

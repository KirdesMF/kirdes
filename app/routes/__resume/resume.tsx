import styles from '~/css/routes/resume.css';

import type { ResumeData, Langs, Certificate } from '~/data/data';
import type { CSSProperties } from 'react';

import { useLoaderData } from 'remix';
import { ElasticLine } from '~/components/elastic-line';
import { TextPanel } from '~/components/text-panel';
import { getResumeDatas } from '~/data/data';

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
export const loader = () => {
  const { experiences, languages, bonus, certificates } = getResumeDatas();
  return {
    experiences: experiences.reverse(),
    languages,
    bonus,
    certificates,
  };
};

/**
 *
 *
 *
 *
 */
export default function Resume() {
  const { experiences, languages, bonus, certificates } = useLoaderData<{
    experiences: Array<ResumeData>;
    languages: Array<Langs>;
    certificates: Array<Certificate>;
    bonus: Array<string>;
  }>();

  return (
    <main className="wrapper grid gap-$clamp-size-2xl py-$clamp-size-2xl">
      <div className="flex gap-x-xs items-baseline">
        <h1 className="text-clamp-xl font-black">
          Resume <span className="text-sm">🚧</span>
        </h1>
        <ElasticLine />
      </div>

      <TextPanel content="Timeline" />
      <section>
        <div className="timeline">
          <div className="timeline__line grid place-items-center"></div>
          {experiences.map((data, idx) => {
            return (
              <div
                key={data.title}
                style={{ '--row': idx + 1 } as CSSProperties}
                className="timeline__panel grid gap-y-2  bg-$body-bg border-$dark-black border-3 shadow-card"
              >
                <div className="flex items-baseline justify-between p-4 border-bottom-2 border-$dark-black">
                  <h2 className="block text-base max-w-[20ch] text-ellipsis whitespace-nowrap overflow-hidden">
                    {data.title}
                  </h2>
                  <em className="font-secondary">
                    {data.start} - {data.end}
                  </em>
                </div>
                <ul className="list-disc ml-4 p-4">
                  {data.description.map((desc, idx) => {
                    return (
                      <li
                        className="dark:font-thin font-light text-sm"
                        key={idx}
                      >
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

      <TextPanel content="More" />
      <section className="flex justify-between flex-wrap gap-10">
        <div>
          <h3 className="font-secondary w-min bg-$about-base color-$dark-black px-4 mb-4">
            Infos
          </h3>
          <ul className="list-disc ml-10 font-light text-sm">
            {bonus.map((b, idx) => {
              return <li key={idx}>{b}</li>;
            })}
          </ul>
        </div>

        <div>
          <h3 className="font-secondary w-min bg-$about-base color-$dark-black px-4 mb-4">
            Certificates
          </h3>
          <ul className="list-disc ml-10 font-light text-sm">
            {certificates.map((certif, idx) => {
              return <li key={idx}>{certif.title}</li>;
            })}
          </ul>
        </div>

        <div>
          <h3 className="font-secondary w-min bg-$about-base color-$dark-black px-4 mb-4">
            Languages
          </h3>
          <ul className="list-disc ml-10 font-light text-sm">
            {languages.map((lang, idx) => {
              return (
                <li key={idx}>
                  <span>{lang.lang} - </span>
                  <span>{lang.level}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <TextPanel content="PDF Resume coming soon" />

      {/* <section className="min-h-100vh">
        <iframe
          className="mx-auto"
          width="70%"
          height="70%"
          src="/resume.pdf"
          title="test"
        ></iframe>
      </section> */}
    </main>
  );
}

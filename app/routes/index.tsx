import { json, Link, useLoaderData } from 'remix';
import { getNotionDatas, getNotionSocialDatas } from '~/data/notion';
import { getGitDatas, GitData } from '~/data/github';
import { Icon } from '@iconify/react';

import type { NotionData } from '~/data/notion';

import styles from '~/css/routes/index.css';
import { CardsSkill } from '~/components/cards';
import { ElasticLine } from '~/components/elastic-line';

// - check https://www.youtube.com/watch?v=3XkU_DXcgl0 for caching
// - https://dev.to/codefinity/remix-newsletter-7-35k7

// provide data coche inside loader
// use an export headers function to cache the route - document

// minutes in seconds
const max_age = 60 * (60 * 2); // 2 hours

/**
 *
 *
 *
 *
 *
 *
 */
export const headers = () => {
  return {
    'Cache-Control': `max-age=${max_age}, public`,
  };
};

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
 *
 *
 *
 */
export const loader = async () => {
  const year = new Date().getFullYear();
  const [notion, github, social] = await Promise.all([
    await getNotionDatas(),
    await getGitDatas(),
    await getNotionSocialDatas(),
  ]);

  return json(
    { notion, github, social, year },
    {
      status: 200,
      headers: {
        'Cache-Control': `max-age=${max_age}, public`,
      },
    }
  );
};

/**
 *
 *
 *
 *
 *
 */
export default function Index() {
  const datas = useLoaderData<{
    notion: Array<NotionData>;
    github: Array<GitData>;
    social: Array<NotionData>;
    year: number;
  }>();

  const langs = datas.notion.filter((data) => data.topic === 'langs');
  const libs = datas.notion.filter((data) => data.topic === 'libs');
  const tools = datas.notion.filter((data) => data.topic === 'tools');

  return (
    <main className="grid gap-$clamp-size-xl">
      <section id="home">
        <div className="wrapper grid items-center min-h-$offset-header">
          <article className="grid gap-y-2">
            <div className="flex items-center gap-x-xs">
              <p className="font-light font-secondary text-sm">
                Cédric Gourville
              </p>
              <ElasticLine />
            </div>
            <div className="relative grid place-items-center h-50vh md:border-shadow-5 bg-grid-50">
              <span className="text-clamp-2xl font-black">
                Kirdes
                <ElasticLine width="100%" />
              </span>
            </div>
            <div className="flex items-center gap-x-xs justify-end">
              <ElasticLine />
              <p className="font-light font-secondary text-sm">
                KirdesMF - {datas.year}
              </p>
            </div>
          </article>
        </div>
      </section>

      <section id="about">
        <div className="wrapper grid gap-y-6xl">
          <header className="flex gap-x-xs items-baseline">
            <h1 className="text-clamp-2xl font-black">About</h1>
            <ElasticLine />
          </header>

          {[langs, libs, tools].map((datas, idx) => (
            <CardsSkill key={idx} title={datas[idx].topic} datas={datas} />
          ))}
          <Link className="color-$text" to="/resume">
            Resume
          </Link>
        </div>
      </section>

      <section id="works">
        <div className="wrapper grid gap-y-4xl">
          <h1 className="text-clamp-2xl font-black">Works</h1>

          <ul className="flex flex-wrap items-center justify-center gap-8 color-$text grid">
            {datas.github.map((data, idx) => (
              <li key={data.id}>
                <article className="card-project border-3 border-$dark-black shadow-card">
                  <div className="bg-grid-25 grid place-items-center py-4">
                    <h2 className="font-secondary text-xl font-bold">
                      {data.description}
                    </h2>
                    <div className="flex flex-wrap gap-4 justify-center">
                      <a
                        href={data.url}
                        className="gradient-works shadow-rounded py-2 px-3xl border-2 border-$dark-black rounded-3xl font-medium text-sm"
                      >
                        Github
                      </a>
                      {data.homepageUrl && (
                        <a
                          className="gradient-works shadow-rounded py-2 px-3xl border-2 border-$dark-black rounded-3xl font-medium text-sm"
                          href={data.homepageUrl}
                        >
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between items-center border-top-3 border-$dark-black px-6 py-6 ">
                    <span className="font-secondary font-bold">{idx + 1}</span>
                    <div className="flex gap-x-3 ">
                      {data.repositoryTopics.edges.map((topic) => {
                        const icon = topic.node.topic.name;
                        const isFolio = topic.node.topic.name === 'portfolio';

                        if (isFolio) return null;

                        return (
                          <div key={topic.node.id}>
                            <Icon
                              className="color-$works-base w-5 h-5"
                              icon={`simple-icons:${icon}`}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact">
        <div className="wrapper grid gap-y-4xl">
          <h1 className="text-clamp-xl font-black">Contact</h1>

          <ul className="flex flex-wrap justify-center gap-x-5">
            {datas.social.map((data) => (
              <li className="grid place-items-center gap-y-2" key={data.name}>
                <Icon
                  className="w-10 h-10 color-$contact-base"
                  icon={data.icon}
                />
                <a className="font-extra-light" href={data.href}>
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <Link className="color-$text" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

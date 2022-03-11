import { json, Link, useLoaderData } from 'remix';
import { getNotionDatas, getNotionSocialDatas } from '~/data/notion';
import { getGitDatas, GitData } from '~/data/github';
import { Icon } from '@iconify/react';

import type { LoaderFunction, HeadersFunction } from 'remix';
import type { NotionData } from '~/data/notion';

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
export const headers: HeadersFunction = () => {
  return {
    'Cache-Control': `max-age=${max_age}, public`,
  };
};

/**
 *
 *
 *
 *
 *
 *
 *
 */
export const loader: LoaderFunction = async () => {
  const [notion, github, social] = await Promise.all([
    await getNotionDatas(),
    await getGitDatas(),
    await getNotionSocialDatas(),
  ]);

  return json(
    { notion, github, social },
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
  }>();

  return (
    <main className="flow">
      <section id="home">
        <div className="wrapper grid items-center min-h-[calc(100vh-5rem)]">
          <article className="flow flow-space-xs">
            <div className="flex items-center">
              <p>Cédric Gourville</p>
            </div>
            <div className="relative grid place-items-center h-[50vh] border-red border-2 bg-grid"></div>
            <div className="flex items-center justify-end">
              <p>KirdesMF</p>
            </div>
          </article>
        </div>
      </section>

      <section id="about">
        <div className="wrapper flow">
          <h1 className="text-8xl font-wght-bold">About</h1>
          <ul className="flex flex-wrap gap-xs justify-center">
            {datas.notion.map((data) => (
              <li className="card-skill px-2 py-4" key={data.name}>
                <Icon
                  icon={data.icon}
                  className="w-14 h-14 text-[color:var(--about-base)] px-2 py-2"
                />
                <a className="text-xs font-wght-extra-light" href={data.href}>
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <Link className="color-[var(--text)]" to="/resume">
              Resume
            </Link>
          </div>
        </div>
      </section>

      <section id="works">
        <div className="wrapper flow">
          <h1 className="text-8xl font-wght-bold">Works</h1>
          <ul className="flow-small color-[var(--text)]">
            {datas.github.map((data) => (
              <li key={data.id}>
                <a href={data.url}>{data.description}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact">
        <div className="wrapper flow">
          <h1 className="text-8xl font-wght-bold">Contact</h1>
          <ul className="flex flex-wrap justify-center gap-x-5">
            {datas.social.map((data) => (
              <li className="grid place-items-center gap-y-2" key={data.name}>
                <Icon
                  icon={data.icon}
                  className="w-10 h-10 text-[color:var(--contact-base)]"
                />
                <a className="font-wght-extra-light" href={data.href}>
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <Link className="color-[var(--text)]" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

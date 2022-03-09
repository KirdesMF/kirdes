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

export const headers: HeadersFunction = () => {
  return {
    'Cache-Control': `max-age=${max_age}, public`,
  };
};

export default function Index() {
  const datas = useLoaderData<{
    notion: Array<NotionData>;
    github: Array<{ node: GitData }>;
    social: Array<NotionData>;
  }>();

  return (
    <main className="grid gap-10">
      <section id="home">
        <div className="wrapper grid items-center min-h-[calc(100vh-5rem)]">
          <article className="grid gap-5">
            <div className="flex gap-5 items-center">
              <p>Cédric Gourville</p>
            </div>
            <div className="relative grid place-items-center h-[50vh] border-gray border-2"></div>
            <div className="flex gap-5 items-center justify-end">
              <p>KirdesMF</p>
            </div>
          </article>
        </div>
      </section>

      <section id="about">
        <div className="wrapper grid gap-10">
          <ul className="flex flex-wrap gap-10 justify-center">
            {datas.notion.map((data) => (
              <li key={data.name}>
                <Icon icon={data.icon} className="w-10 h-10 color-red-500" />
                <a href={data.href}>{data.name}</a>
              </li>
            ))}
          </ul>
          <Link to="/resume">Resume</Link>
        </div>
      </section>

      <section id="works">
        <div className="wrapper grid gap-10">
          <ul>
            {datas.github.map((data) => (
              <li key={data.node.id}>
                <a href={data.node.url}>{data.node.description}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact">
        <div className="wrapper grid gap-10">
          <ul className="flex flex-wrap gap-10 justify-center">
            {datas.social.map((data) => (
              <li key={data.name}>
                <Icon icon={data.icon} className="w-10 h-10 color-red-500" />
                <a href={data.href}>{data.name}</a>
              </li>
            ))}
          </ul>
          <Link to="/contact">Contact</Link>
        </div>
      </section>
    </main>
  );
}

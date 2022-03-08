import { json, Link, useLoaderData } from 'remix';
import { getNotionDatas } from '~/data/notion';

import type { LoaderFunction } from 'remix';
import type { NotionData } from '~/data/notion';
import { Icon } from '@iconify/react';

// - check https://www.youtube.com/watch?v=3XkU_DXcgl0 for caching
// - https://dev.to/codefinity/remix-newsletter-7-35k7

export const loader: LoaderFunction = async ({ request }) => {
  const datas = await getNotionDatas();

  return json(datas, {
    status: 200,
    headers: {
      'Cache-Control': 'max-age=60, public',
    },
  });
};

export default function Index() {
  const datas = useLoaderData<Array<NotionData>>();

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
          <ul className="grid gap-5">
            {datas.map((data) => (
              <li key={data.name}>
                <Icon icon={data.icon} className="w-10 h-10 color-red-500" />
                <a href={data.href}>{data.name}</a>
              </li>
            ))}
          </ul>
          <Link to="/resume">Resume</Link>
        </div>
      </section>
      <section id="works"></section>
      <section id="contact"></section>
    </main>
  );
}

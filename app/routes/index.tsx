import { json, useLoaderData } from 'remix';
import { getNotionDatas } from '~/data/notion';

import type { HeadersFunction, LoaderFunction } from 'remix';

export const loader: LoaderFunction = async () => {
  const datas = await getNotionDatas();
  return json(datas, {
    status: 200,
  });
};

// TODO - check https://www.youtube.com/watch?v=3XkU_DXcgl0 for caching
export const headers: HeadersFunction = () => {
  return {
    'Cache-Control': 'max-age=604800',
  };
};

export default function Index() {
  const datas = useLoaderData<Record<string, any>[]>();

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
      <section id="about"></section>
      <section id="works"></section>
      <section id="contact"></section>
    </main>
  );
}

// import { json, useLoaderData } from 'remix';
// import type { LoaderFunction } from 'remix';

// import { getNotionDatas } from '~/server/notion.server';

// export const loader: LoaderFunction = async () => {
//   const datas = await getNotionDatas();
//   return json(datas, {
//     status: 200,
//     headers: { 'Cache-Control': 'max-age=604800,' },
//   });
// };

export default function Index() {
  // const datas = useLoaderData<Record<string, any>[]>();

  return (
    <main className="grid gap-10">
      <section id="home">
        <div className="grid items-center min-h-[calc(100vh-5rem)]"></div>
      </section>
      <section id="about"></section>
      <section id="works"></section>
      <section id="contact"></section>
    </main>
  );
}

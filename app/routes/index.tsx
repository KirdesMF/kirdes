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

  return <div className="flex gap-10 min-h-[100vh]"></div>;
}

import { json, useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';

import { getNotionDatas } from '~/server/notion.server';

export const loader: LoaderFunction = async () => {
  const datas = await getNotionDatas();
  return json(datas);
};

export default function Index() {
  const datas = useLoaderData<Record<string, any>[]>();

  return (
    <div className="mt-8 px-8">
      <h1>Welcome to Cedric</h1>
      <ul className="text-purple-500">
        {datas.map((data) => (
          <li key={data.name}>{data.name}</li>
        ))}
      </ul>
    </div>
  );
}

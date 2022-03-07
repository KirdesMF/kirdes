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
    <div>
      <h1>Cedric</h1>
      <ul>
        {datas.map((data) => (
          <li key={data.name}>{data.name}</li>
        ))}
      </ul>
    </div>
  );
}

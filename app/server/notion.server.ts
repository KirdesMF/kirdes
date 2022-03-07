import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export async function getNotionDatas() {
  const datas = await notion.databases.query({
    database_id: `${process.env.NOTION_DB}`,
  });

  return datas.results.map(({ properties }: any) => ({
    href: properties.href.url,
    topics: properties.topics.select.name,
    name: properties.name.title[0].plain_text,
  }));
}

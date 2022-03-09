import { notion } from '~/utils/notion.server';

export type NotionData = {
  icon: string;
  href: string;
  name: string;
  topics: string;
};

export async function getNotionDatas(): Promise<NotionData[]> {
  const datas = await notion.databases.query({
    database_id: `${process.env.NOTION_DB}`,
    filter: {
      and: [
        {
          or: [
            { property: 'topics', select: { equals: 'lang' } },
            { property: 'topics', select: { equals: 'tools' } },
          ],
        },
      ],
    },
  });

  return datas.results.map(({ properties }: any) => ({
    href: properties.href.url,
    topics: properties.topics.select.name,
    name: properties.name.title[0].plain_text,
    icon: properties.icon.rich_text[0].plain_text,
  }));
}

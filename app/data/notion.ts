import { notion } from '~/utils/notion.server';

export type NotionData = {
  icon: string;
  href: string;
  name: string;
  topic: string;
};

export async function getNotionDatas(): Promise<NotionData[]> {
  const datas = await notion.databases.query({
    database_id: `${process.env.NOTION_DB}`,
  });

  return datas.results.map(({ properties }: any) => ({
    href: properties.href.url,
    topic: properties.topic.select?.name || '',
    name: properties.name.title[0].plain_text,
    icon: properties.icon.rich_text[0].plain_text,
  }));
}

export async function getNotionSocialDatas(): Promise<NotionData[]> {
  const datas = await notion.databases.query({
    database_id: `${process.env.NOTION_SOCIAL_DB}`,
  });

  return datas.results.map(({ properties }: any) => ({
    href: properties.href.url,
    topic: properties.topic.select?.name || '',
    name: properties.name.title[0].plain_text,
    icon: properties.icon.rich_text[0].plain_text,
  }));
}

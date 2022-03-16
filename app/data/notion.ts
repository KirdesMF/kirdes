import { notion } from '~/utils/notion.server';

export type NotionData = {
  icon: string;
  href: string;
  name: string;
  topic: 'langs' | 'tools' | 'libs' | 'learn';
};

export type NotionContactData = {
  name: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
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

// https://developers.notion.com/reference/post-page
export async function createContactPage(form: NotionContactData) {
  const page = await notion.pages.create({
    parent: {
      database_id: `${process.env.NOTION_CONTACT_DB}`,
    },
    properties: {
      Name: {
        title: [{ text: { content: form.name } }],
      },
      'Last Name': {
        rich_text: [{ text: { content: form.subject } }],
      },
      Email: {
        email: form.email,
      },
      Subject: {
        rich_text: [{ text: { content: form.subject } }],
      },
      Message: {
        rich_text: [{ text: { content: form.message } }],
      },
      Status: {
        select: { name: 'new' },
      },
    },
  });

  return page;
}

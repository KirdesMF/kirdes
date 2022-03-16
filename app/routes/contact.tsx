import { Form, Link, redirect } from 'remix';
import type { ActionFunction } from 'remix';
import { createContactPage } from '~/data/notion';

import type { NotionContactData } from '~/data/notion';
import { ElasticLine } from '~/components/elastic-line';

/**
 *
 *
 *
 */
export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const datas: NotionContactData = {
    name: form.get('name') as string,
    lastName: form.get('lastName') as string,
    email: form.get('email') as string,
    message: form.get('message') as string,
    subject: form.get('subject') as string,
  };

  await createContactPage(datas);

  return redirect(`/contact`, {
    status: 200,
  });
};

/**
 *
 *
 *
 *
 */
export default function Contact() {
  return (
    <main className="wrapper grid gap-$clamp-size-2xl py-$clamp-size-2xl">
      <div className="flex gap-x-xs items-baseline">
        <h1 className="text-clamp-xl font-black">
          Get in touch <span className="text-sm">🚧</span>
        </h1>
        <ElasticLine />
      </div>

      <Form
        reloadDocument
        method="post"
        action="/contact"
        className="grid gap-y-4 color-[var(--color)] w-full md:max-w-1/2"
      >
        <label className="grid">
          <span>Name</span>
          <input type="text" name="name" />
        </label>

        <label className="grid">
          <span>Last name</span>
          <input type="text" name="lastname" />
        </label>

        <label className="grid">
          <span>Email</span>
          <input type="email" name="email" />
        </label>

        <label className="grid">
          <span>Subject</span>
          <input type="text" name="subject" />
        </label>

        <label className="grid">
          <span>Message</span>
          <textarea name="message" />
        </label>

        <button className="border-$dark-black border-2 py-4 hover:bg-$contact-lighter">
          Submit
        </button>
      </Form>
      <Link to="/">Home</Link>
    </main>
  );
}

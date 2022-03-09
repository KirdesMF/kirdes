import { Form, Link, redirect } from 'remix';
import type { ActionFunction } from 'remix';
import { createContactPage } from '~/data/notion';

import type { NotionContactData } from '~/data/notion';

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

export default function Contact() {
  return (
    <main className="wrapper">
      <h1>Contact</h1>
      <Form reloadDocument method="post" className="grid gap-5">
        <label>
          Name: <input type="text" name="name" />
        </label>

        <label>
          Last name: <input type="text" name="lastname" />
        </label>

        <label>
          Email: <input type="email" name="email" />
        </label>

        <label>
          Subject: <input type="text" name="subject" />
        </label>

        <label>
          Message: <textarea name="message" />
        </label>

        <button>Submit</button>
      </Form>
      <Link to="/">Home</Link>
    </main>
  );
}

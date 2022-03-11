import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  redirect,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useTransition,
} from 'remix';
import { getCookieTheme, setCookieTheme } from './utils/cookie.server';
import { Header } from './components/header';

import type {
  MetaFunction,
  LinksFunction,
  ActionFunction,
  LoaderFunction,
  HeadersFunction,
} from 'remix';

import mainStyles from '~/css/main.css';
import unocss from '~/css/uno.css';

export const headers: HeadersFunction = () => {
  return {
    'Cache-Control': `max-age=${60 * 60 * 2}, public`,
  };
};

export const meta: MetaFunction = () => {
  return { title: 'Cédric Gourville' };
};

export const links: LinksFunction = () => {
  return [
    {
      rel: 'preload',
      href: '/fonts/Archivo-variable.ttf',
      as: 'font',
      type: 'font/ttf',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      href: '/fonts/Epilogue-variable.ttf',
      as: 'font',
      type: 'font/ttf',
      crossOrigin: 'anonymous',
    },
    { rel: 'stylesheet', href: mainStyles },
    { rel: 'stylesheet', href: unocss },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  const cookie = await getCookieTheme(request);
  // if (!cookie.theme) cookie.theme = 'light';

  return { theme: cookie.theme };
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const cookie = await getCookieTheme(request);

  const theme = form.get('theme') as 'light' | 'dark';
  const location = form.get('location') as string;

  cookie.theme = theme;

  return redirect(location, {
    headers: {
      'Set-Cookie': await setCookieTheme.serialize(cookie),
    },
  });
};

export default function App() {
  const data = useLoaderData<{ theme: 'light' | 'dark' }>();
  const transition = useTransition();
  const isSubmitting = Boolean(transition.submission);
  const theme = transition.submission?.formData.get('theme') as
    | 'light'
    | 'dark';

  return (
    <html lang="en" className={isSubmitting ? theme : data.theme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header theme={data.theme} />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

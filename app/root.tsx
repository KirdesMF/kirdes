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
} from 'remix';

import mainStyles from '~/css/main.css';
import unoStyles from '~/css/uno.css';
import { Footer } from './components/footer';

/**
 *
 *
 * mata tags
 *
 */
export const meta: MetaFunction = () => {
  const desc =
    'Personal web site - portfolio web developer Cedric Gourville. Here you can find how to get in touch and what I like to work with';

  return {
    keywords: 'html, css, javascript, typescript, react, motion, design',
    description: desc,
    'og:type': 'website',
    'og:url': 'https://kirdesmf.vercel.app',
    'og:title': 'Cédric Gourville - web developer',
    'og:description': desc,
    'og:image': 'https://kirdesmf.vercel.app/img/preview.png',

    'twitter:card': 'summary_large_image',
    'twitter:url': 'https://kirdesmf.vercel.app',
    'twitter:title': 'Cédric Gourville - web developer',
    'twitter:author': '@CedricGourville',
    'twitter:site': '@CedricGourville',
    'twitter:description': desc,
    'twitter:image': 'https://kirdesmf.vercel.app/img/preview.png',
  };
};

/**
 *
 *
 * links tags
 *
 */
export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: mainStyles },
    { rel: 'stylesheet', href: unoStyles },
    { rel: 'manifest', href: '/manifest.json' },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-32x32.png',
      sizes: '32x32',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-16x16.png',
      sizes: '16x16',
    },
  ];
};

/**
 *
 *
 *
 * datas
 *
 *
 */
export const loader: LoaderFunction = async ({ request }) => {
  const cookie = await getCookieTheme(request);
  // if (!cookie.theme) cookie.theme = 'light';

  return { theme: cookie.theme };
};

/**
 *
 *
 * actions - forms
 *
 *
 */
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

/**
 *
 *
 * ui - render - client
 *
 */
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
        <title>Cedric Gourville Web developer</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Header theme={isSubmitting ? theme : data.theme} />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

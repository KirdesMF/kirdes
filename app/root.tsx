import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';

import type { MetaFunction, LinksFunction } from 'remix';

import unoStyles from './styles/uno.css';
import darkStyles from './styles/dark.css';

export const meta: MetaFunction = () => {
  return { title: 'Cédric Gourville' };
};

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: unoStyles },
    { rel: 'stylesheet', href: darkStyles },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="text-blue-600 mx-100 pt-50">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

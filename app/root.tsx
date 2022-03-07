import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
import { Header } from './components/header';

import type { MetaFunction, LinksFunction, ActionFunction } from 'remix';

import resetStyles from './styles/reset.css';
import darkStyles from './styles/dark.css';
import unoStyles from './styles/uno.css';
import { Footer } from './components/footer';

export const meta: MetaFunction = () => {
  return { title: 'Cédric Gourville' };
};

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: resetStyles },
    { rel: 'stylesheet', href: darkStyles },
    { rel: 'stylesheet', href: unoStyles },
  ];
};

export const action: ActionFunction = async ({ request }) => {
  return null;
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
      <body>
        <Header theme="light" />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

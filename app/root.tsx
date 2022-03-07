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
import { Inline } from './components/inline';

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
      <body>
        <header className="h20">
          <Inline>
            <h1>Cédric Gourville</h1>
            <p>Welcome</p>
          </Inline>
        </header>
        <Outlet />
        <footer className="pos-fixed bottom-0 h20">Footer</footer>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

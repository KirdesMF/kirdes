import { Form, Link, useLocation } from 'remix';
import { Icon } from '@iconify/react';
import clsx from 'clsx';

type Props = {
  theme: 'light' | 'dark';
};

const icon = {
  light: 'iconoir:sun-light',
  dark: 'iconoir:moon-sat',
};

/***
 *
 *
 *
 */
export function Header({ theme }: Props) {
  const { pathname } = useLocation();
  const currentTheme = theme === 'light' ? 'dark' : 'light';

  return (
    <header
      role="banner"
      className={clsx(
        'pos-sticky top-0 z-10',
        'w-full py-5 px-10 mx-auto',
        'flex items-center justify-between',
        ' border-bottom-2 bg-grid-header'
      )}
    >
      <Form method="post" action="/">
        <input type="hidden" name="location" value={pathname} />
        <input type="hidden" name="theme" value={currentTheme} />

        <button className="relative color-$text rounded-full h-10 w-10 border-$text border-2 bg-$body-bg p-2">
          <span className="sr-only">Theme toggle</span>
          <span className="bg-$body-bg">
            <Icon icon={icon[currentTheme]} width="100%" height="100%" />
          </span>
        </button>
      </Form>

      <Link to="/" className="h-10 w-10">
        <img
          className="rounded-full ring-shadow"
          src="/img/kirdes.jpg"
          alt="Kirdes profile pics"
          width="100%"
          height="100%"
        />
      </Link>
    </header>
  );
}

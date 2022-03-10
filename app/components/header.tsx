import { Form, useLocation } from 'remix';
import { Icon } from '@iconify/react';

const styles = {
  header:
    'pos-sticky top-0 z-10 w-full px-10 py-5 mx-auto flex items-center justify-between border-bottom-2',
  btn: 'color-[var(--color)] hover:color-[var(--welcome-base)] font-bold p-2 rounded transition-colors-200 h-10 w-10',
};

const icon = {
  light: 'iconoir:sun-light',
  dark: 'iconoir:moon-sat',
};

type Props = {
  theme: 'light' | 'dark';
};
export function Header({ theme }: Props) {
  const { pathname } = useLocation();
  const currentTheme = theme === 'light' ? 'dark' : 'light';

  return (
    <header className={styles.header}>
      <Form method="post" action="/">
        <button className={styles.btn}>
          <span className="sr-only">Theme toggle</span>
          <Icon icon={icon[currentTheme]} width="100%" height="100%" />

          <input type="hidden" name="location" value={pathname} />
          <input type="hidden" name="theme" value={currentTheme} />
        </button>
      </Form>

      <a href="#home" className="h-10 w10">
        <img
          className="rounded-full"
          src="/img/kirdes.jpg"
          alt="Kirdes profile pics"
          width="100%"
          height="100%"
        />
      </a>
    </header>
  );
}

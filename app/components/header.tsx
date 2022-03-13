import { Form, useLocation } from 'remix';
import { Icon } from '@iconify/react';

const styles = {
  header:
    'pos-sticky top-0 z-10 w-full h-$header-height px-10 mx-auto flex items-center justify-between border-bottom-2 bg-grid-header',
  btn: 'relative color-$text rounded-full h-10 w-10 border-$text border-2 bg-$body-bg p-2',
  shadow:
    'absolute top-[3px] left-0 bg-$text w-full h-full rounded-full -z-1 border-b-$text border-bottom-2',
};

const icon = {
  light: 'iconoir:sun-light',
  dark: 'iconoir:moon-sat',
};

type Props = {
  theme: 'light' | 'dark';
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
    <header className={styles.header}>
      <Form method="post" action="/">
        <input type="hidden" name="location" value={pathname} />
        <input type="hidden" name="theme" value={currentTheme} />

        <button className={styles.btn}>
          <span className="bg-$body-bg">
            <Icon icon={icon[currentTheme]} width="100%" height="100%" />
          </span>
          <span className={styles.shadow}></span>
          <span className="sr-only">Theme toggle</span>
        </button>
      </Form>

      <a href="#home" className="h-10 w-10">
        <img
          className="rounded-full ring-shadow"
          src="/img/kirdes.jpg"
          alt="Kirdes profile pics"
          width="100%"
          height="100%"
        />
      </a>
    </header>
  );
}

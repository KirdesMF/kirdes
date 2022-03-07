import { Form } from 'remix';

const styles = {
  header:
    'pos-sticky top-0 z-10 w-full px-10 py-5 mx-auto flex items-center justify-between border-bottom-2 border-purple',
  btn: 'text-black hover:text-red font-bold p-2 rounded transition-colors-200',
  span: {
    default: 'block w-5 h-5',
    light: 'i-iconoir-sun-light',
    dark: 'i-iconoir-moon-sat',
  },
};

type Props = {
  theme: 'light' | 'dark';
};

export function Header({ theme = 'light' }: Props) {
  return (
    <header className={styles.header}>
      <Form method="post">
        <button className={styles.btn}>
          <span className="sr-only">Theme toggle</span>
          <span
            className={`${styles.span.default} ${styles.span[theme]}`}
          ></span>
        </button>
      </Form>

      <a href="#home" className="h-10 w10">
        <img
          className="rounded-full"
          src="/img/kirdes.jpg"
          alt="Kirdes profile pics"
        />
      </a>
    </header>
  );
}

import { Icon } from '@iconify/react';

type CardProps = {
  icon: string;
  href: string;
  name: string;
};
export function CardSKill(props: CardProps) {
  return (
    <article className="card-skill bg-$body-bg border-2 border-$dark-black">
      <div className="grid place-items-center">
        <Icon icon={props.icon} className="w-12 h-12 color-$text" />
      </div>
      <div className="py-4 px-2 border-top-2 border-t-$dark-black grid place-items-center gradient-about">
        <a
          href={props.href}
          className="text-sm text-wght-bold w-full h-full text-center"
        >
          {props.name}
        </a>
      </div>
    </article>
  );
}
export function CardProject() {
  return <article></article>;
}
export function CardContact() {
  return <article></article>;
}

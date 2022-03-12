import { Icon } from '@iconify/react';
import type { NotionData } from '~/data/notion';

type CardsSkillProps = {
  datas: Array<NotionData>;
  title: 'langs' | 'tools' | 'libs';
};

const titles = {
  langs: 'Languages',
  libs: 'Libraries',
  tools: 'Tools',
};

const icons = {
  langs: 'i-iconoir-code',
  libs: 'i-iconoir-terminal-outline',
  tools: 'i-iconoir-edit-pencil',
};

const styles = {
  wrapper:
    'card-skill-wrapper relative border-$dark-black border-4 rounded-lg other-grid',
  title:
    'place-self-start text-base px-8 py-2 bg-$dark-black color-$white rounded-br-lg font-secondary',
  card: 'card-skill shadow-card bg-$body-bg border-2 border-$dark-black',
  link: 'py-4 px-2 border-top-2 border-t-$dark-black grid place-items-center gradient-about',
  icon: 'hidden lg:block absolute -bottom-6 -right-6 rounded-full w-12 h-12 p3 border-2 border-$dark-black gradient-about shadow-rounded',
};

export function CardsSkill(props: CardsSkillProps) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{titles[props.title]}</h2>

      <ul className="flex flex-wrap gap-5 justify-center">
        {props.datas.map((data) => (
          <li key={data.name}>
            <article className={styles.card}>
              <div className="grid place-items-center">
                <Icon icon={data.icon} className="w-12 h-12 color-$text" />
              </div>
              <div className={styles.link}>
                <a
                  href={data.href}
                  className="text-sm text-wght-bold color-$dark-black w-full h-full text-center"
                >
                  {data.name}
                </a>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <div className={styles.icon}>
        <span
          // prettier-ignore
          className={`${icons[props.title]} block h-full w-full color-$dark-black`}
        ></span>
      </div>
    </div>
  );
}

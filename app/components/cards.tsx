import { Icon } from '@iconify/react';
import type { NotionData } from '~/data/notion';

/**
 *
 *
 *
 *
 */
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

export function CardsSkill(props: CardsSkillProps) {
  return (
    <div className="card-skill-wrapper relative border-$dark-black border-4 rounded-xl bg-grid-15">
      <h3 className="place-self-start text-base px-8 py-2 bg-$dark-black color-$white rounded-br-xl font-secondary">
        {titles[props.title]}
      </h3>

      <ul className="flex flex-wrap gap-5 justify-center px-4">
        {props.datas.map((data) => (
          <li key={data.name}>
            <article className="card-skill shadow-card bg-$body-bg border-2 border-$dark-black">
              <div className="grid place-items-center">
                <Icon icon={data.icon} className="w-12 h-12 color-$text" />
              </div>
              <div className="py-4 px-2 border-top-2 border-t-$dark-black grid place-items-center gradient-about">
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

      <div className="card-skill-wrapper__icon shadow-rounded hidden lg:block">
        <span
          // prettier-ignore
          className={`${icons[props.title]} block h-full w-full color-$dark-black`}
        ></span>
      </div>
    </div>
  );
}

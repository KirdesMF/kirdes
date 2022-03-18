import { Icon } from '@iconify/react';
import type { NotionData } from '~/data/notion';

import clsx from 'clsx';

/**
 *
 *
 *
 *
 */
type CardsSkillProps = {
  datas: Array<NotionData>;
  title: NotionData['topic'];
};

const icons = {
  langs: 'i-iconoir-code',
  libs: 'i-iconoir-terminal-outline',
  tools: 'i-iconoir-edit-pencil',
  learn: 'i-iconoir-book-stack',
};

export function CardsSkill(props: CardsSkillProps) {
  return (
    <div className="relative bg-grid-10 py-10 px-10 border-$dark-black border-2">
      <ul className="flex flex-wrap gap-5 justify-center">
        {props.datas.map((data) => (
          <li key={data.name}>
            <article className="card-skill shadow-card bg-$body-bg border-2 border-$dark-black">
              <div className="grid place-items-center">
                <Icon icon={data.icon} className="w-8 h-8 color-$text" />
              </div>
              <div className="py-2 px-2 border-top-2 border-t-$dark-black grid place-items-center gradient-about">
                <a
                  href={data.href}
                  className={clsx(
                    'w-full h-full',
                    'color-$dark-black',
                    'text-xs font-base  text-center max-w-[10ch] text-ellipsis whitespace-nowrap overflow-hidden'
                  )}
                >
                  {data.name}
                </a>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <div className="card-skill--icon shadow-rounded hidden lg:block">
        <span
          className={clsx(
            icons[props.title],
            'block h-full w-full color-$dark-black'
          )}
        ></span>
      </div>
    </div>
  );
}

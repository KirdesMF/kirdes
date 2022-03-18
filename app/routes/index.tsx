import styles from '~/css/routes/index.css';
import type { NotionData } from '~/data/notion';

import { json, Link, useLoaderData } from 'remix';
import { getNotionDatas, getNotionSocialDatas } from '~/data/notion';
import { getGitDatas, GitData } from '~/data/github';
import { Icon } from '@iconify/react';

import { CardsSkill } from '~/components/cards';
import { ElasticLine } from '~/components/elastic-line';
import { TextPanel } from '~/components/text-panel';
import { PatternDivider } from '~/components/divider';

// - check https://www.youtube.com/watch?v=3XkU_DXcgl0 for caching
// - https://dev.to/codefinity/remix-newsletter-7-35k7

// provide data coche inside loader
// use an export headers function to cache the route - document

// TODO move data to a json/js file to avoid fetching it every time since it's .static
// was just to try notion api

/**
 *
 *
 *
 *
 */
export const links = () => [{ rel: 'stylesheet', href: styles }];
/**
 *
 *
 *
 *
 *
 *
 *
 */
export const loader = async () => {
  const year = new Date().getFullYear();
  const [notion, github, social] = await Promise.all([
    await getNotionDatas(),
    await getGitDatas(),
    await getNotionSocialDatas(),
  ]);

  return json(
    { notion, github, social, year },
    {
      status: 200,
      headers: {
        'Cache-Control': 'public, max-age=86000',
      },
    }
  );
};

/**
 *
 *
 *
 *
 *
 */
export default function Index() {
  const datas = useLoaderData<{
    notion: Array<NotionData>;
    github: Array<GitData>;
    social: Array<NotionData>;
    year: number;
  }>();

  const langs = datas.notion.filter((data) => data.topic === 'langs');
  const libs = datas.notion.filter((data) => data.topic === 'libs');
  const tools = datas.notion.filter((data) => data.topic === 'tools');
  const learn = datas.notion.filter((data) => data.topic === 'learn');

  return (
    <main>
      <section id="home" className="py-$clamp-size-2xl">
        <div className="wrapper">
          <article className="grid gap-y-2">
            <div className="flex items-center gap-x-xs">
              <p className="font-light font-secondary text-sm">
                Cédric Gourville
              </p>
              <ElasticLine />
            </div>

            <div className="grid place-items-center h-[55vh] bg-grid-50 md:border-3 border-$dark-black">
              <h1 className="text-clamp-2xl font-black">Kirdes</h1>
            </div>

            <div className="flex items-center gap-x-xs justify-end">
              <ElasticLine />
              <p className="font-light font-secondary text-sm">
                KirdesMF - {datas.year}
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="py-$clamp-size-2xl">
        <div className="wrapper">
          <p className="text-clamp-md font-bold text-center">
            Hello, I'm{' '}
            <a
              href="https://twitter.com/CedricGourville"
              target="_blank"
              rel="noopener noreferrer"
              className="color-$about-base inline-flex items-baseline gap-x-2"
            >
              Cédric
              <span
                role="img"
                className="i-iconoir-open-in-browser inline-block w-4 h-4"
              ></span>
            </a>
            . I can help you create your next project with unique identity and
            good practices in mind. If you want to know more about me...{' '}
            <span className="color-$works-base">keep reading.</span>
          </p>
        </div>
      </section>

      <PatternDivider end="about" />

      <section id="about" className="py-$clamp-size-2xl">
        <div className="wrapper grid gap-$clamp-size-2xl">
          <div className="flex gap-x-xs items-baseline">
            <h2 className="text-clamp-2xl font-black">About</h2>
            <ElasticLine />
          </div>

          <p className="text-clamp-md font-bold">
            I'm 36, father of 3, living in{' '}
            <span className="color-$welcome-base">France </span>near Paris. I'm
            a self taught developer, I started learning web development a few
            years ago. I like to keep a close eye on{' '}
            <span className="color-$about-base">design</span>,{' '}
            <span className="color-$works-base">accessibility</span> and{' '}
            <span className="color-$contact-base">user experience</span>. I also
            love to bring website to life with motion animation.
          </p>

          <div className="grid">
            <p className="text-clamp-md font-bold">
              Let's start by talking about what I like to use and keep a fresh
              eye on it
            </p>
            <span className="justify-self-center text-clamp-lg font-black color-$about-base">
              ...
            </span>
          </div>

          <hr />

          <div className="grid gap-y-8">
            <TextPanel content="Programming languages ?" />
            <CardsSkill title={'langs'} datas={langs} />
          </div>

          <div className="grid gap-y-8">
            <TextPanel content="Librairies ? Frameworks ?" />
            <CardsSkill title={'libs'} datas={libs} />
          </div>

          <div className="grid gap-y-8">
            <TextPanel content="Great tools 🙌" />
            <CardsSkill title={'tools'} datas={tools} />
          </div>

          <div className="grid gap-y-8">
            <TextPanel content="I need to master those" />
            <CardsSkill title={'learn'} datas={learn} />
          </div>

          <hr />

          <p className="text-clamp-md font-bold">
            Since I'm looking for a job and it may interested some people, there
            it is my{' '}
            <Link to="/resume" className="color-$about-base">
              resume.
            </Link>
          </p>
        </div>
      </section>

      <PatternDivider end="works" />

      <section id="works" className="py-$clamp-size-2xl">
        <div className="wrapper grid gap-$clamp-size-2xl">
          <div className="flex gap-x-xs items-baseline">
            <h2 className="text-clamp-2xl font-black">Works</h2>
            <ElasticLine />
          </div>

          <p className="text-clamp-md font-bold">
            You can find here some project that I've worked on. There is also
            some current side projects. All projects are actually on{' '}
            <a className="color-$works-base" href="https://github.com/KirdesMF">
              github
            </a>
            .
          </p>

          <hr />

          <TextPanel content="There it is my sides/school projects..." />

          <ul className="card-project-wrapper color-$text">
            {datas.github.map((data, idx) => (
              <li key={data.id}>
                <article className="card-project border-3 border-$dark-black shadow-card">
                  <div className="bg-grid-25 grid place-items-center py-4">
                    <h3 className="font-secondary text-xl font-bold">
                      {data.description}
                    </h3>

                    <div className="flex flex-wrap gap-4 justify-center">
                      <a
                        className="gradient-works shadow-rounded py-2 px-3xl border-2 border-$dark-black rounded-3xl font-medium text-sm"
                        href={data.url}
                      >
                        Github
                      </a>
                      {data.homepageUrl && (
                        <a
                          className="gradient-works shadow-rounded py-2 px-3xl border-2 border-$dark-black rounded-3xl font-medium text-sm"
                          href={data.homepageUrl}
                        >
                          Live
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between items-center border-top-3 border-$dark-black px-6 py-6 ">
                    <span className="font-secondary font-bold">{idx + 1}</span>
                    <div className="flex gap-x-3 ">
                      {data.repositoryTopics.edges.map((topic) => {
                        const icon = topic.node.topic.name;
                        const isFolio = topic.node.topic.name === 'portfolio';
                        if (isFolio) return null;
                        return (
                          <span key={topic.node.id}>
                            <Icon
                              className="color-$works-base w-5 h-5"
                              icon={`simple-icons:${icon}`}
                            />
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          <hr />

          <TextPanel content="Codepens" />

          <p className="text-clamp-md font-bold">
            I also have some{' '}
            <a
              href="https://codepen.io/kirdesmf"
              target="_blank"
              rel="noreferrer"
              className="color-$works-base"
            >
              Codepen
            </a>{' '}
            projects.
          </p>
        </div>
      </section>

      <PatternDivider end="contact" />

      <section id="contact" className="py-$clamp-size-2xl">
        <div className="wrapper grid gap-$clamp-size-2xl">
          <h2 className="sr-only">Contact</h2>

          <TextPanel content="Get in touch" />

          <ul className="flex flex-wrap justify-center gap-5">
            {datas.social.map((data) => (
              <li key={data.name}>
                <article className="card-contact">
                  <span className="color-$white p-3 border-3 border-$dark-black gradient-contact">
                    <Icon icon={data.icon} width="100%" height="100%" />
                  </span>
                  <div className="bg-grid-15 grid place-items-center">
                    <a className="font-medium font-secondary" href={data.href}>
                      {data.name}
                    </a>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          <div>
            <Link className="color-$text" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

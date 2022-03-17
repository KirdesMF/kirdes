import { json, Link, useLoaderData } from 'remix';
import { getNotionDatas, getNotionSocialDatas } from '~/data/notion';
import { getGitDatas, GitData } from '~/data/github';
import { Icon } from '@iconify/react';

import type { NotionData } from '~/data/notion';

import styles from '~/css/routes/index.css';
import { CardsSkill } from '~/components/cards';
import { ElasticLine } from '~/components/elastic-line';
import { TextPanel } from '~/components/text-panel';
import { PatternDivider } from '~/components/divider';
import { SVGRibbon } from '~/components/svgs';

// - check https://www.youtube.com/watch?v=3XkU_DXcgl0 for caching
// - https://dev.to/codefinity/remix-newsletter-7-35k7

// provide data coche inside loader
// use an export headers function to cache the route - document

// TODO move data to a json/js file to avoid fetching it every time since it's static
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
    <main className="grid gap-$clamp-size-2xl pb-$clamp-size-2xl">
      <section id="home">
        <div className="wrapper grid items-center min-h-$offset-header">
          <article className="grid gap-y-2">
            <div className="flex items-center gap-x-xs">
              <p className="font-light font-secondary text-sm">
                Cédric Gourville
              </p>
              <ElasticLine />
            </div>

            <div className="relative grid place-items-center h-55vh md:border-3 border-$dark-black bg-grid-50">
              <h1 className="text-clamp-2xl font-black">Kirdes</h1>

              <Link
                to="/resume"
                className="absolute w-[8rem] h-[8rem] -bottom-[4rem] -left-[4rem] hidden xl:grid grid-center-area"
              >
                <SVGRibbon />
                <span className="z-1 font-bold font-secondary color-$dark-black">
                  Available
                </span>
              </Link>
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

      <PatternDivider end="about" />

      <section id="about">
        <div className="wrapper grid gap-$clamp-size-2xl">
          <div className="flex gap-x-xs items-baseline">
            <h2 className="text-clamp-2xl font-black">About</h2>
            <ElasticLine />
          </div>

          <div className="text-lg">
            <p>
              Hey, I'm{' '}
              <a href="https://twitter.com/CedricGourville">
                <em className="font-bold">Cédric</em>
              </a>
              , I am 36 years old and I come from France. My family and I live
              in a small town near Paris, with our dog Preston. I've always
              loved hanging out on the web since I was little and I always
              wondered how it worked ! I asked myself this question more and
              more often, which gave me the desire to learn web dev. Before all
              that I did several jobs, letter carrier, stagehand in a theater,
              electrician, technical manager store, fire safety officer{' '}
              <Link to="resume">
                <em className="font-bold"> - check here -</em>
              </Link>{' '}
              in which I learned a lot, humanly and professionally but none were
              really made by choice.
            </p>

            <p className="pt-5">
              My last job gave me the opportunity and time to invest in
              learning. So a little over 5 years ago, I started my
              apprenticeship and by the end of 2021 I have validated some of
              these achievements. To make it simple, here is a list of the techs
              I master the most.
            </p>
          </div>

          <div className="grid gap-y-8">
            <TextPanel content="I like to use..." />
            <CardsSkill title={'langs'} datas={langs} />
          </div>

          <div className="grid gap-y-8">
            <TextPanel content="what helps me a lot..." />
            <CardsSkill title={'libs'} datas={libs} />
          </div>

          <div className="grid gap-y-8">
            <TextPanel content="some useful tools" />
            <CardsSkill title={'tools'} datas={tools} />
          </div>

          <div className="grid gap-y-8">
            <TextPanel content="currently learning..." />
            <CardsSkill title={'learn'} datas={learn} />
          </div>

          <Link className="color-$text" to="/resume">
            Check my Resume here
          </Link>
        </div>
      </section>

      <PatternDivider end="works" />

      <section id="works">
        <div className="wrapper grid gap-$clamp-size-2xl">
          <div className="flex gap-x-xs items-baseline">
            <h2 className="text-clamp-2xl font-black">Works</h2>
            <ElasticLine />
          </div>

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
        </div>
      </section>

      <PatternDivider end="contact" />

      <section id="contact">
        <div className="wrapper grid gap-y-4xl">
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

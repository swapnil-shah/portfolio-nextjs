import React from 'react';
import ExpandCollapse from './ExpandCollapse';
import { featuredProjects, educationExperience, works } from '@/data/config';
import { StickyContainer, Sticky } from 'react-sticky';
import Footer from './Footer';
export default function MainContent() {
  return (
    <>
      <div className="static px-0 py-8 md:p-8 md:max-w-xl lg:max-w-2xl md:absolute md:right-0 lg:pb-20 lg:pt-32">
        <StickyContainer>
          <div id={featuredProjects.id} className="mb-0 md:mb-16">
            <div className="overflow-x-hidden w-full pb-4 hidden md:block">
              <h2 className="landingSectionTitle max-w-max mx-0 text-left relative md:w-max text-xs tracking-widest uppercase font-bold">
                {featuredProjects.name}
              </h2>
            </div>
            <Sticky>
              {({ style }) => (
                <div
                  className="z-40 py-4 bg-neutral-50 dark:bg-neutral-900 overflow-x-hidden md:hidden"
                  style={{ ...style }}
                >
                  <h2 className="landingSectionTitle max-w-max mx-0 text-left relative md:w-max text-xs tracking-widest uppercase font-bold">
                    {featuredProjects.name}
                  </h2>
                </div>
              )}
            </Sticky>
            <div className="group pb-16 md:pb-4 mx-1 md:mx-0">
              {featuredProjects.projects.map((project, i) => (
                <article
                  className={`drop-shadow-md bg-neutral-100 dark:bg-neutral-800 transition-all duration-200 ease-in-out md:group-hover:opacity-50 md:hover:opacity-important md:hover:scale-11/10x block p-10 ${
                    i + 1 == featuredProjects.projects.length ? `mb-0` : `mb-4`
                  }`}
                  key={i}
                >
                  <h3 className="mb-2 text-xl font-semibold leading-tight text-neutral-900 dark:text-neutral-50 tracking-wider">
                    {project.title}
                  </h3>
                  <p className="text-xs font-normal tracking-widest leading-none uppercase text-neutral-900 dark:text-neutral-50 pb-4">
                    {project.tags.map((tag, i) => [i > 0 && ', ', tag])}
                  </p>
                  <p className="mt-2">{project.description}</p>
                  <div className="mt-12">
                    <ul className="flex -mx-8">
                      {project.links.map((link, i) => (
                        <li className="mx-8 list-none" key={i}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener"
                            className="flex items-center mt-px text-neutral-900 dark:text-neutral-50 hover:underline capitalize"
                          >
                            <span>{link.title}</span>
                            <div className="w-4 p-0.5 ml-0.5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 12 12"
                                aria-hidden="true"
                                className="flex-none stroke-current"
                              >
                                <title>External link icon</title>
                                <path d="M10.976 1.193A.314.314 0 0010.687 1H6.312a.313.313 0 000 .625h3.62L5.467 6.091a.313.313 0 00.443.442l4.466-4.466v3.62a.313.313 0 00.625 0V1.313a.328.328 0 00-.024-.119z" />
                                <path d="M3.5 1v.625H2.25a.625.625 0 00-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625V8.5H11v1.875c0 .345-.28.625-.625.625h-8.75A.625.625 0 011 10.375v-8.75C1 1.28 1.28 1 1.625 1H3.5z" />
                              </svg>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </StickyContainer>
        <StickyContainer>
          <div id={educationExperience.id} className="my-0 md:my-16">
            <div className="overflow-x-hidden w-full pb-4 hidden md:block">
              <h2 className="landingSectionTitle max-w-max mx-0 text-left relative md:w-max text-xs tracking-widest uppercase font-bold">
                {educationExperience.name}
              </h2>
            </div>
            <Sticky>
              {({ style }) => (
                <div
                  className="z-40 py-4 bg-neutral-50 dark:bg-neutral-900 overflow-x-hidden md:hidden"
                  style={{ ...style }}
                >
                  <h2 className="landingSectionTitle max-w-max mx-0 text-left relative md:w-max text-xs tracking-widest uppercase font-bold">
                    {educationExperience.name}
                  </h2>
                </div>
              )}
            </Sticky>
            <div className="pb-16 md:pb-4">
              {educationExperience.items.map((item, i) => (
                <ol
                  className="relative border-l border-neutral-200 dark:border-neutral-700 ml-2 md:ml-0"
                  key={i}
                >
                  <li
                    className={`ml-6 ${
                      i + 1 == educationExperience.items.length
                        ? `pb-0`
                        : `pb-10`
                    }`}
                  >
                    <span className="absolute flex items-center justify-center w-4 h-4 bg-neutral-400 rounded-full -left-2 mt-2 ring-8 ring-white dark:ring-neutral-900 dark:bg-neutral-700" />
                    <h3 className="flex items-center mb-1 text-xl font-semibold leading-tight text-neutral-900 dark:text-neutral-50 tracking-wider">
                      {item.company}
                      {i === 0 && (
                        <span className="bg-neutral-700 text-gray-100 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ml-3 ">
                          Current
                        </span>
                      )}
                    </h3>
                    <time className="block text-xs font-semibold tracking-wider leading-none text-neutral-700 dark:text-neutral-300">
                      {item.date}
                    </time>
                    <p
                      className="mt-4 mb-2"
                      dangerouslySetInnerHTML={{ __html: item.summary }}
                    ></p>
                    {item.description && (
                      <ExpandCollapse description={item.description} />
                    )}
                  </li>
                </ol>
              ))}
            </div>
          </div>
        </StickyContainer>
        <StickyContainer>
          <div id={works.id} className="my-0 md:my-16">
            <div className="overflow-x-hidden w-full pb-4 hidden md:block">
              <h2 className="landingSectionTitle max-w-max mx-0 text-left relative md:w-max text-xs tracking-widest uppercase font-bold">
                {works.name}
              </h2>
            </div>

            <Sticky>
              {({ style }) => (
                <div
                  className="z-40 py-4 bg-neutral-50 dark:bg-neutral-900 overflow-x-hidden md:hidden"
                  style={{ ...style }}
                >
                  <h2 className="landingSectionTitle max-w-max mx-0 text-left relative md:w-max text-xs tracking-widest uppercase font-bold">
                    {works.name}
                  </h2>
                </div>
              )}
            </Sticky>
            <div className="flex flex-wrap mx-1 md:mx-0 group pb-16 md:pb-4">
              {works.projects.map((project, i) => (
                <article
                  className={`flex-none w-full w-49-per md:min-h-240 lg:min-h-320 md:m-0.5 ${
                    i + 1 == works.projects.length ? `mb-0` : `mb-4`
                  }`}
                  key={i}
                >
                  <div
                    className={`flex flex-col justify-between w-full h-full p-6 min-h-inherit drop-shadow-md bg-neutral-100 dark:bg-neutral-800 md:group-hover:opacity-50 md:hover:scale-11/10x md:hover:opacity-important transition-all duration-200 ease-in-out`}
                  >
                    <div>
                      <h3 className="mb-2 text-xl font-semibold leading-tight text-neutral-900 dark:text-neutral-50 tracking-wider">
                        {project.title}
                      </h3>
                      <p className="text-xs font-normal tracking-widest leading-none uppercase text-neutral-900 dark:text-neutral-50 pb-4">
                        {project.tags.map((tag, i) => [i > 0 && ', ', tag])}
                      </p>
                      <p className="mt-2">{project.description}</p>
                    </div>
                    <div className="mt-12">
                      <ul className="flex -mx-8  text-neutral-900 dark:text-neutral-50">
                        <li className="mx-8 list-none">
                          <a
                            href="https://www.meta-play.io/"
                            target="_blank"
                            rel="noopener"
                            className="flex items-center mt-px text-neutral-900 dark:text-neutral-50 hover:underline"
                          >
                            <span>Live Site</span>
                            <div className="w-4 p-0.5 ml-0.5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 12 12"
                                aria-hidden="true"
                                className="flex-none stroke-current"
                              >
                                <title>External link icon</title>
                                <path d="M10.976 1.193A.314.314 0 0010.687 1H6.312a.313.313 0 000 .625h3.62L5.467 6.091a.313.313 0 00.443.442l4.466-4.466v3.62a.313.313 0 00.625 0V1.313a.328.328 0 00-.024-.119z" />
                                <path d="M3.5 1v.625H2.25a.625.625 0 00-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625V8.5H11v1.875c0 .345-.28.625-.625.625h-8.75A.625.625 0 011 10.375v-8.75C1 1.28 1.28 1 1.625 1H3.5z" />
                              </svg>
                            </div>
                          </a>
                        </li>
                        <li className="mx-8 list-none">
                          <a
                            href="https://noti.st/sarahdayan/hQyqGK"
                            target="_blank"
                            rel="noopener"
                            className="flex items-center mt-px text-neutral-900 dark:text-neutral-50 hover:underline"
                          >
                            <span>GitHub</span>
                            <div className="w-4 p-0.5 ml-0.5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 12 12"
                                aria-hidden="true"
                                className="flex-none stroke-current"
                              >
                                <title>External link icon</title>
                                <path d="M10.976 1.193A.314.314 0 0010.687 1H6.312a.313.313 0 000 .625h3.62L5.467 6.091a.313.313 0 00.443.442l4.466-4.466v3.62a.313.313 0 00.625 0V1.313a.328.328 0 00-.024-.119z" />
                                <path d="M3.5 1v.625H2.25a.625.625 0 00-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625V8.5H11v1.875c0 .345-.28.625-.625.625h-8.75A.625.625 0 011 10.375v-8.75C1 1.28 1.28 1 1.625 1H3.5z" />
                              </svg>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </StickyContainer>
        <div className="md:hidden">
          <Footer isMobile />
        </div>
      </div>
    </>
  );
}

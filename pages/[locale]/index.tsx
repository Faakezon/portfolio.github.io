import Header from "../../components/header";
import Title from "../../components/title";
import Skill from "../../components/skill";
import Reveal from "../../components/reveal";

import ProjectsSection from "../../components/Projects/projectsSection";

import type { GetStaticPaths, GetStaticProps } from "next";
import { getDictionary } from "@/lib/i18n";
import type { Dictionary, Locale } from "@/lib/i18n-types";

export const locales: Locale[] = ["en", "sv"];

interface PageProps {
  locale: Locale;
  dictionary: Dictionary;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: locales.map((locale) => ({
      params: { locale },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const locale = params?.locale as Locale;

  const dictionary = getDictionary(locale);

  if (!dictionary) {
    throw new Error(`Dictionary not found for locale "${locale}"`);
  }

  return {
    props: {
      locale,
      dictionary,
    },
  };
};

interface PageProps {
  locale: Locale;
  dictionary: Dictionary;
}

export default function Page({ dictionary }: PageProps) {
  const t = dictionary.Home;

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-b from-indigo-50 via-white to-pink-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-950 font-sans">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-start py-24 px-8 sm:items-start">
        <Reveal>
          <Header dictionary={dictionary} />
        </Reveal>

        <Reveal delay={0.5}>
          <section className="w-full mb-16">
            <Title title={t.aboutTitle} />
            <p className="text-zinc-700 dark:text-zinc-400 leading-8 max-w-2xl text-lg whitespace-pre-line">
              {t.aboutParagraph}
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.5}>
          <section className="w-full mb-16">
            <Title title={t.skillsTitle} />

            <Reveal delay={0.5}>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-zinc-700 dark:text-zinc-400 text-lg">
                {t.skills.map((skill, i) => (
                  <Reveal key={skill} delay={i * 0.05}>
                    <Skill skill={skill} />
                  </Reveal>
                ))}
              </ul>
            </Reveal>
          </section>
        </Reveal>

        <ProjectsSection dictionary={dictionary} />

        <Reveal>
          <section className="w-full mb-24">
            <Title title={t.contactTitle} />

            <p className="text-zinc-700 dark:text-zinc-400 mb-6 text-lg">
              {t.contactText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${t.ContactButtons.emailUrl}`}
                className="flex items-center gap-3 rounded-full bg-indigo-600 text-white px-6 py-3 font-medium shadow-lg hover:bg-indigo-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M1.5 4.5a2 2 0 012-2h17a2 2 0 012 2v15a2 2 0 01-2 2h-17a2 2 0 01-2-2v-15zM3 5.25v13.5h18V5.25l-9 6-9-6z" />
                </svg>
                {t.ContactButtons.email}
              </a>

              <a
                href={t.ContactButtons.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-full bg-indigo-600 text-white px-6 py-3 font-medium shadow-lg hover:bg-indigo-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.039-1.852-3.039-1.853 0-2.136 1.445-2.136 2.939v5.669h-3.554V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.372-1.852 3.604 0 4.271 2.372 4.271 5.456v6.287zM5.337 7.433c-1.144 0-2.07-.927-2.07-2.07 0-1.144.926-2.07 2.07-2.07s2.07.926 2.07 2.07c0 1.143-.926 2.07-2.07 2.07zM7.113 20.452H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.543C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>

                {t.ContactButtons.linkedin}
              </a>
            </div>
          </section>
        </Reveal>
      </main>
    </div>
  );
}

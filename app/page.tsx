
import Header from "./components/header";
import Project from "./components/project";
import Title from "./components/title";
import Skill from "./components/skill";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-b from-indigo-50 via-white to-pink-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-950 font-sans">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-start py-24 px-8 sm:items-start">
        <Header></Header>

        <section className="w-full mb-16">
          <Title title="Om mig" />
          <p className="text-zinc-700 dark:text-zinc-400 leading-8 max-w-2xl text-lg">
            Jag inledde min resa inom mjukvaruutveckling genom att fördjupa mig
            i programmering med Unity och C#. Det ledde vidare till en roll som
            mjukvaruutvecklingskonsult på Ericsson AB i Karlskrona, där jag
            arbetade med Java, JavaScript och relaterade teknologier.
            <br />
            <br />I dag arbetar jag som fullstackutvecklare och konsult på
            Avalon Innovation. Jag har varit involverad i flera projekt med
            varierande tekniska stackar och miljöer. Jag strävar alltid efter
            att utvecklas och testar nya teknologier och arbetssätt för att
            leverera moderna, hållbara lösningar.
          </p>
        </section>

        <section className="w-full mb-16">
          <Title title="Tekniker & Verktyg" />
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-zinc-700 dark:text-zinc-400 text-lg">
            <Skill skill="TypeScript / JavaScript" />
            <Skill skill="React" />
            <Skill skill="Node" />
            <Skill skill="Express" />
            <Skill skill="Flutter" />
            <Skill skill="Dart" />
            <Skill skill="GraphQL" />
            <Skill skill="Vue" />
            <Skill skill="Docker" />
            <Skill skill="C#" />
            <Skill skill="Ember.js" />
            <Skill skill="PHP" />
            <Skill skill="MySQL" />
            <Skill skill="Git" />
          </ul>
        </section>

        <section className="w-full mb-16">
          <Title title="Projekt" />
          <div className="grid gap-8 sm:grid-cols-2">
            <Project
              title="Techquity"
              description="Generell utveckling av plattformen"
              role="Frontend / Backend"
              length="1 år"
              workplace="Avalon Innovation AB"
              url="https://techquity.se/"
            />
            <Project
              title="Skolon"
              description="Projekt under en kort period"
              role="Frontend / Backend Test (Unit)"
              length="4 månader"
              workplace="Avalon Innovation AB"
              url="https://skolon.com/sv/var-plattform/"
            />
            <Project
              title="Kubicom"
              description="Generell utveckling av plattformen"
              role="Frontend / Backend"
              length="Av/På under 3 år"
              workplace="Avalon Innovation AB"
              url="https://kubicom.com/"
            />
            <Project
              title="Furhoffs"
              description="Uppdaterade befintligt projekt med ny funktionalitet och gav hela sidan en grafisk makeover "
              role="Fullstack"
              length="Förvaltning under tiden hos Avalon (5 år)"
              workplace="Avalon Innovation AB"
              url="https://konfigurator.furhoffs.se/"
            />
            <Project
              title="Galio of Sweden"
              description="Ny funktionalitet, dockeriserade projektet, hantering och uppdatering av backoffice funktioner"
              role="Fullstack"
              length="2 år"
              workplace="Avalon Innovation AB"
              url="https://galioofsweden.com/"
            />
            <Project
              title="Dugga - Digital Assessments"
              description="Generell utveckling av plattformens alla aspekter"
              role="Fullstack"
              length="3 år"
              workplace="Dugga AB"
              url="https://dugga.com/"
            />
          </div>
        </section>

        <section className="w-full mb-24">
          <Title title="Kontakt" />
          <p className="text-zinc-700 dark:text-zinc-400 mb-6 text-lg">
            Vill du komma i kontakt? Här är mina uppgifter:
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:you@example.com"
              className="flex items-center gap-3 rounded-full bg-indigo-600 text-white px-6 py-3 font-medium shadow-lg hover:bg-indigo-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16v16H4z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              E-post
            </a>
            <a
              href="https://www.linkedin.com/in/fabian-åkesson-06088867/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full border-2 border-indigo-600 text-indigo-600 px-6 py-3 font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.026-3.059-1.865-3.059-1.867 0-2.153 1.459-2.153 2.967v5.696h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.562 2.839-1.562 3.036 0 3.6 2.017 3.6 4.639v5.556z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

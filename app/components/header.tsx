"use client";

import Image from "next/image";

const Header = () => {
  const startDate = new Date(2018, 8); // September 2018 (month is 0-indexed)
  const now = new Date();
  const years =
    now.getFullYear() -
    startDate.getFullYear() -
    (now.getMonth() < startDate.getMonth() ? 1 : 0);

  const githubLoader = ({ src, width }: { src: string; width: number }) => {
    return `https://faakezon.github.io/portfolio.github.io${src}?w=${width}`;
  };

  return (
    <div className="flex flex-col items-center sm:items-start w-full mb-16">
      <Image
        loader={githubLoader}
        src="/profile.jpg"
        alt="Profile photo"
        width={140}
        height={140}
        className="rounded-full border-4 border-indigo-200 dark:border-indigo-700 shadow-lg"
      />
      <h1 className="mt-6 text-5xl font-bold tracking-tight text-indigo-900 dark:text-indigo-300">
        Fabian Åkesson
      </h1>
      <p className="mt-2 text-lg text-zinc-700 dark:text-zinc-400">
        Fullstack utvecklare & Konsult hos Avalon Innovation
      </p>
      <p className="mt-1 text-lg text-indigo-700 dark:text-indigo-400">
        {years} år i branschen utan uppehåll
        <span className="ml-1 relative group cursor-pointer">
          *
          <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max max-w-xs bg-zinc-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
            Beräknat från September 2018 och inräknat 6 månaders föräldraledigt.
          </span>
        </span>
      </p>
    </div>
  );
};

export default Header;

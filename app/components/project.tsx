interface ProjectProps {
  title: string;
  description: string;
  url?: string;
  length?: string;
  role?: string;
  workplace?: string;
}

export default function Project({ title, description, url, length, role, workplace }: ProjectProps) {
  return (
    <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-pink-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-950 shadow-lg hover:scale-105 transition-transform duration-300">
      <h3 className="text-2xl font-semibold mb-2 text-indigo-800 dark:text-indigo-300">
        {title}
      </h3>
      {workplace && (
        <span className="text-sm text-indigo-500 dark:text-indigo-400 mb-1 block">
          Arbetsplats: {workplace}
        </span>
      )}
      {role && (
        <span className="text-sm text-indigo-700 dark:text-indigo-400 mb-1 block">
          Roll: {role}
        </span>
      )}
      {length && (
        <span className="text-sm text-indigo-600 dark:text-indigo-400 mb-2 block">
          Projektlängd: {length}
        </span>
      )}
      <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed mb-4">
        {description}
      </p>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 rounded-full bg-indigo-600 text-white px-4 py-2 font-medium shadow hover:bg-indigo-700 transition-colors"
        >
          Besök projektet
        </a>
      )}
    </div>
  );
}
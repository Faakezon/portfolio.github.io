// pages/index.tsx
import { useEffect } from "react";
import Head from "next/head";
import Reveal from "../components/reveal"; // adjust path as needed

export default function RootRedirect() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/sv";
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Redirecting…</title>
      </Head>

      <div className="flex min-h-screen items-center justify-center bg-linear-to-b from-indigo-50 via-white to-pink-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-950 font-sans px-8">
        <Reveal>
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="text-xl text-zinc-700 dark:text-zinc-300 tracking-wide">
              Omdirigerar till Svensk version…
            </p>

            <div className="h-8 w-8 rounded-full border-2 border-zinc-400 border-t-indigo-600 dark:border-zinc-600 dark:border-t-indigo-400 animate-spin" />
          </div>
        </Reveal>
      </div>
    </>
  );
}

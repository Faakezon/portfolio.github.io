// pages/index.tsx
import Head from "next/head";

export default function RootRedirect() {
  return (
    <>
      <Head>
        <title>Redirecting…</title>
        <meta httpEquiv="refresh" content="0;url=/sv" />
      </Head>
      <div className="flex items-center justify-center min-h-screen">
        Redirecting to Swedish version…
      </div>
    </>
  );
}

import Image from "next/image"
import { JetBrains_Mono } from "next/font/google"
import Head from "next/head"
import Card from "./card"
import SocMed from "./socmed"
import ThemeToggle from "@/components/theme-toggle"

const mono = JetBrains_Mono({ subsets: ["latin"], display: "swap" })

export default function Home() {
  return (
    <>
      <Head>
        <title>Nur Imam Iskandar — Full-Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Nur Imam Iskandar, a full-stack developer based in West Java, Indonesia."
        />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main
        className={`relative min-h-screen overflow-x-hidden px-4 py-6 sm:px-6 sm:py-10 lg:px-8 ${mono.className}`}
      >
        {/* Ambient glass background */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-linear-to-b from-white via-slate-100 to-slate-200 dark:from-[#04060b] dark:via-[#050912] dark:to-[#02040a]" />
          <div className="absolute -left-24 -top-40 h-96 w-96 rounded-full bg-emerald-300/40 blur-[130px] dark:bg-emerald-500/20" />
          <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-cyan-300/40 blur-[130px] dark:bg-cyan-500/15" />
          <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-teal-300/35 blur-[130px] dark:bg-teal-500/15" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)] dark:bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)]" />
        </div>

        <div className="mx-auto w-full max-w-5xl">
          {/* Terminal window */}
          <section className="overflow-hidden rounded-2xl border border-white/70 bg-white/60 shadow-[0_24px_70px_-30px_rgba(15,23,42,0.5)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[0_30px_90px_-30px_rgba(0,0,0,0.95)]">
            {/* Window chrome */}
            <div className="flex items-center gap-3 border-b border-slate-200/80 bg-white/40 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
              <span aria-hidden className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-rose-400/90" />
                <span className="h-3 w-3 rounded-full bg-amber-400/90" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
              </span>
              <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                iskandar45@portfolio
                <span className="text-emerald-600 dark:text-emerald-400">:~</span>
                <span className="hidden sm:inline"> — zsh</span>
              </p>
              <div className="ml-auto">
                <ThemeToggle />
              </div>
            </div>

            <div className="space-y-10 p-5 sm:p-8">
              {/* whoami */}
              <div className="flex flex-col items-center gap-6 sm:flex-row">
                <div className="relative shrink-0">
                  <div
                    aria-hidden
                    className="absolute inset-0 rounded-full bg-emerald-400/30 blur-2xl"
                  />
                  <Image
                    src="https://avatars.githubusercontent.com/u/36033209?v=4"
                    alt="Nur Imam Iskandar"
                    width={160}
                    height={160}
                    priority
                    className="relative h-28 w-28 rounded-full border border-white/70 object-cover ring-1 ring-emerald-400/40 dark:border-white/15 sm:h-32 sm:w-32"
                  />
                </div>

                <div className="min-w-0 text-center sm:text-left">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    <span className="text-emerald-600 dark:text-emerald-400">➜</span>{" "}
                    <span className="text-cyan-600 dark:text-cyan-400">~</span> whoami
                  </p>
                  <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                    Nur <span className="text-emerald-600 dark:text-emerald-400">Imam</span>{" "}
                    Iskandar
                  </h1>
                  <h2 className="mt-1 text-lg font-medium text-slate-600 dark:text-slate-300">
                    Full-Stack Developer
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                    Hello, I&apos;m a fullstack developer based in West Java, Indonesia.
                    <span aria-hidden className="term-caret" />
                  </p>
                  <SocMed />
                </div>
              </div>

              {/* projects */}
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  <span className="text-emerald-600 dark:text-emerald-400">➜</span>{" "}
                  <span className="text-cyan-600 dark:text-cyan-400">~</span> ls -la ~/projects
                </p>
                <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  <Card />
                </div>
              </div>

              {/* footnote */}
              <footer className="border-t border-slate-200/80 pt-6 dark:border-white/10">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  <span className="text-emerald-600 dark:text-emerald-400">➜</span>{" "}
                  <span className="text-cyan-600 dark:text-cyan-400">~</span> echo{" "}
                  <span className="text-slate-700 dark:text-slate-200">
                    &quot;Not a lot, but honest work&quot;
                  </span>
                </p>
                <p className="mt-2 text-xs text-slate-400 dark:text-slate-500">
                  © {new Date().getFullYear()} Nur Imam Iskandar · Built with Next.js &amp;
                  Tailwind CSS
                </p>
              </footer>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

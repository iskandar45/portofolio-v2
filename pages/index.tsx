import Image from "next/image"
import { Inter } from "next/font/google"
import Head from "next/head"
import Card from "./card"
import SocMed from "./socmed"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Portofolio @Iskandar45</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-12 ${inter.className}`}
      >
        <div className="z-10 w-full max-w-5xl items-center justify-between text-cyan-600 text-2xl font-extrabold lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b p-4 backdrop-blur-2xl dark:border-neutral-800  dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border-none  lg:p-4 ">
            Iskandar45
          </p>
          <div className="fixed bottom-0 left-0 flex h-28 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-4 text-base font-medium lg:pointer-events-auto lg:p-0"
              href="https://vercel.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              &copy; {new Date().getFullYear()} By
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={70}
                height={20}
                priority
              />
            </a>
          </div>
        </div>

        <div className="max-w-5xl my-20 flex flex-col items-center">
          <Image
            className="rounded-full items-center mb-5  transition ease-in-out duration-150 dark:drop-shadow-[0_3px_10px_rgba(0,255,255,.3)] dark:hover:drop-shadow-[0_3px_20px_rgba(0,255,255,.3)]"
            src="https://avatars.githubusercontent.com/u/36033209?v=4"
            alt=""
            width="200"
            height="200"
          />
          <h1 className="text-3xl  font-bold leading-tight text-gray-900 dark:text-gray-100 drop-shadow-[0_3px_10px_rgba(0,255,255,.3)]">
            Nur <span className="text-cyan-600">Imam</span> Iskandar
          </h1>
          <h2 className="text-xl  font-bold leading-tight text-gray-900 dark:text-gray-100">
            Full-Stack Developer
          </h2>
          <p className="mt-4 text-center text-lg leading-relaxed text-gray-500 dark:text-gray-400">
            Hello, I&apos;m a fullstack developer based in West Java, Indonesia.
          </p>
          {/* Link Social media */}
          <SocMed />
          {/* content */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
            <Card />
          </div>
          {/* footnote */}
          <div className="mt-10  justify-center">
            <p className="text-center text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              {/* Note */}
              Not a lot, but honest work
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

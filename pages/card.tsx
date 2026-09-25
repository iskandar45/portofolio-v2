import Image from "next/image"

export const MOCK_DATA = [
  {
    id: 97,
    title: "Pokedex App",
    imgSrc: "/preview/pokedex-app.jpeg",
    linkPreview: "https://iskandar-pokedex-app.vercel.app/",
    linkSource: "https://github.com/Iskandar45/pokedex-app",
    description:
      "Pokedex App is a simple app that allows users to search for pokemon by name, type, or other criteria.",
  },
  {
    id: 98,
    title: "Preact Clock",
    imgSrc: "/preview/clock-app.jpeg",
    linkPreview: "https://iskandar-clock-app.vercel.app/",
    linkSource: "https://github.com/Iskandar45/clock-app",
    description: "Simple digital clock",
  },
  {
    id: 99,
    title: "Weather App",
    imgSrc: "/preview/weather-app.jpeg",
    linkPreview: "https://iskandar-weather-app.vercel.app/",
    linkSource: "https://github.com/Iskandar45/weather-app",
    description:
      "This is a weather app that allows you to search for a weather forecast for any city.",
  },
  {
    id: 100,
    title: "Todo App",
    imgSrc: "/preview/todo-app.jpeg",
    linkPreview: "https://todo-app-iskandar.vercel.app/",
    linkSource: "https://github.com/Iskandar45/todo-app",
    description: "This is a todo app that allows you to add, delete, and edit tasks.",
  },
]

function slugify(title: string) {
  return title.toLowerCase().replace(/\s+/g, "-")
}

export default function Card() {
  return (
    <>
      {MOCK_DATA.map((data) => (
        <article
          key={data.id}
          className="group overflow-hidden rounded-xl border border-white/70 bg-white/60 backdrop-blur-lg transition duration-300 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-[0_20px_45px_-22px_rgba(16,185,129,0.65)] dark:border-white/10 dark:bg-white/[0.04]"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/80 bg-white/40 px-3 py-2 dark:border-white/10 dark:bg-white/[0.03]">
            <span aria-hidden className="flex gap-1">
              <span className="h-2 w-2 rounded-full bg-rose-400/80" />
              <span className="h-2 w-2 rounded-full bg-amber-400/80" />
              <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
            </span>
            <span className="truncate text-[11px] text-slate-500 dark:text-slate-400">
              ~/projects/{slugify(data.title)}
            </span>
          </div>

          <a
            href={data.linkPreview}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden"
          >
            <Image
              src={data.imgSrc}
              alt={data.title}
              width={500}
              height={300}
              className="h-44 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          </a>

          <div className="p-4">
            <h3 className="text-base font-semibold">{data.title}</h3>
            <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {data.description}
            </p>
            <a
              href={data.linkSource}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300/80 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-emerald-400/70 hover:bg-emerald-500/10 hover:text-emerald-700 dark:border-white/15 dark:text-slate-200 dark:hover:text-emerald-400"
            >
              <Image
                src="/github.svg"
                width={16}
                height={16}
                alt=""
                className="opacity-70 dark:invert"
              />
              <span>Github</span>
            </a>
          </div>
        </article>
      ))}
    </>
  )
}

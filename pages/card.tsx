import Image from "next/image"
import React from "react"

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

export default function Card() {
  return MOCK_DATA.map((data) => {
    return (
      <div
        key={data.id}
        className="border border-gray-400 dark:border-white rounded shadow-md transition ease-in-out duration-500 hover:shadow-2xl"
      >
        <a href={data.linkPreview} target="_blank" rel="noopener noreferrer">
          <Image
            src={data.imgSrc}
            alt={data.title}
            width="500"
            height="300"
            className="w-full h-[200px] rounded transition ease-in-out duration-500 hover:opacity-80"
          />
        </a>
        <div className="px-4 py-2">
          <h1 className="text-2xl">{data.title}</h1>
          <p className="text-slate-600 dark:text-slate-200 overflow-hidden text-ellipsis whitespace-nowrap">
            {data.description}
          </p>
          <a
            href={data.linkSource}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center px-2 py-2 my-2 border border-gray-400 text-base font-medium rounded-md transition ease-in-out duration-150 hover:bg-teal-500 "
          >
            <Image
              src="/github.svg"
              width="25"
              height={25}
              alt="Github"
              title="Github"
              className="dark:invert"
            />
            <span className="ml-2 dark:text-white">Github</span>
          </a>
        </div>
      </div>
    )
  })
}

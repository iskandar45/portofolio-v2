import Image from "next/image"
import React from "react"

export default function SocMed() {
  return (
    <div className="mt-10 flex justify-center gap-2">
      <a
        href="https://github.com/Iskandar45"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-2 py-2 border border-violet-500 text-base font-medium rounded-md text-white transition ease-in-out duration-300 hover:bg-violet-500 shadow-md hover:shadow-violet-500"
      >
        <Image
          src="/github.svg"
          width="25"
          height={25}
          alt="Github"
          title="Github"
          className="dark:invert"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/nur-imam-iskandar-380380175/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-2 py-2 border border-blue-500 text-base font-medium rounded-md text-white transition ease-in-out duration-300 hover:bg-blue-500 shadow-md hover:shadow-blue-500"
      >
        <Image
          src="/linkedin.svg"
          width="25"
          height={25}
          alt="LinkedIn"
          title="LinkedIn"
          className="dark:invert"
        />
      </a>
      <a
        href="mailto:imam.stmik15@gmail.com"
        className="inline-flex items-center justify-center px-2 py-2 border border-rose-500 text-base font-medium rounded-md text-white transition ease-in-out duration-300 hover:bg-rose-500 shadow-md hover:shadow-rose-500"
      >
        <Image
          src="/envelope.svg"
          width="25"
          height={25}
          alt="Twitter"
          title="Twitter"
          className="dark:invert"
        />
      </a>
      <a
        href="https://twitter.com/iskandar_remote/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-2 py-2 border border-blue-500 text-base font-medium rounded-md text-white transition ease-in-out duration-300 hover:bg-blue-500 shadow-md hover:shadow-blue-500"
      >
        <Image
          src="/twitter.svg"
          width="25"
          height={25}
          alt="Twitter"
          title="Twitter"
          className="dark:invert"
        />
      </a>
      <a
        href="https://www.instagram.com/imam_remote/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-2 py-2 border border-orange-500 text-base font-medium rounded-md text-white transition ease-in-out duration-300 hover:bg-orange-500 shadow-md hover:shadow-orange-500"
      >
        <Image
          src="/instagram.svg"
          width="25"
          height={25}
          alt="Instagram"
          title="Instagram"
          className="dark:invert"
        />
      </a>
    </div>
  )
}

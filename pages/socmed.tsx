import Image from "next/image"

const LINKS = [
  {
    label: "Github",
    href: "https://github.com/Iskandar45",
    icon: "/github.svg",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nur-imam-iskandar-380380175/",
    icon: "/linkedin.svg",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:imam.stmik15@gmail.com",
    icon: "/envelope.svg",
    external: false,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/iskandar_remote/",
    icon: "/twitter.svg",
    external: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/imam_remote/",
    icon: "/instagram.svg",
    external: true,
  },
]

export default function SocMed() {
  return (
    <ul className="mt-5 flex flex-wrap justify-center gap-2 sm:justify-start">
      {LINKS.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            title={link.label}
            aria-label={link.label}
            {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/70 bg-white/60 backdrop-blur transition hover:-translate-y-0.5 hover:border-emerald-400/70 hover:bg-emerald-500/10 hover:shadow-[0_10px_28px_-12px_rgba(16,185,129,0.7)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 dark:border-white/10 dark:bg-white/[0.04]"
          >
            <Image
              src={link.icon}
              width={18}
              height={18}
              alt=""
              className="opacity-65 transition group-hover:opacity-100 dark:invert"
            />
          </a>
        </li>
      ))}
    </ul>
  )
}

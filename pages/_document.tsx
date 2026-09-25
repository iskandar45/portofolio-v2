import { Html, Head, Main, NextScript } from "next/document"

// Runs before paint: stored choice wins, otherwise the system preference decides
// (dark is the default because the theme is terminal-first).
const themeScript = `(function(){try{var stored=localStorage.getItem("theme");var dark=stored?stored==="dark":!window.matchMedia("(prefers-color-scheme: light)").matches;var root=document.documentElement;root.classList.toggle("dark",dark);root.style.colorScheme=dark?"dark":"light";}catch(e){}})();`

export default function Document() {
  return (
    <Html lang="en" className="dark" suppressHydrationWarning>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

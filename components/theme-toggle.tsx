import { useSyncExternalStore } from "react"

type Theme = "dark" | "light"

// The `dark` class on <html> is the source of truth (set before paint by the
// script in _document). This tiny external store keeps React in sync with it.
const listeners = new Set<() => void>()

function readTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light"
}

function getServerSnapshot(): Theme {
  return "dark"
}

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange)

  // Follow changes made in another tab.
  const onStorage = (event: StorageEvent) => {
    if (event.key === "theme" && event.newValue) {
      applyTheme(event.newValue === "dark" ? "dark" : "light")
    }
  }
  window.addEventListener("storage", onStorage)

  return () => {
    listeners.delete(onStoreChange)
    window.removeEventListener("storage", onStorage)
  }
}

function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.classList.toggle("dark", theme === "dark")
  root.style.colorScheme = theme
  try {
    localStorage.setItem("theme", theme)
  } catch {
    // Storage can be unavailable (private mode); the toggle still works in-page.
  }
  listeners.forEach((listener) => listener())
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, readTheme, getServerSnapshot)
  const next: Theme = theme === "dark" ? "light" : "dark"
  const label = `Switch to ${next} mode`

  return (
    <button
      type="button"
      onClick={() => applyTheme(next)}
      aria-label={label}
      title={label}
      className="inline-flex items-center gap-1.5 rounded-full border border-slate-300/70 bg-white/70 px-2.5 py-1 text-[11px] font-medium text-slate-600 transition hover:-translate-y-0.5 hover:border-emerald-400/70 hover:text-emerald-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 dark:border-white/15 dark:bg-white/5 dark:text-slate-300 dark:hover:border-emerald-400/60 dark:hover:text-emerald-400"
    >
      {theme === "dark" ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3.5 w-3.5"
        >
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3.5 w-3.5"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
        </svg>
      )}
      <span className="hidden sm:inline">{theme}</span>
    </button>
  )
}

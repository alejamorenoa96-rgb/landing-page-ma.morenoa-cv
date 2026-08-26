import type { ReactNode } from 'react'
import { useLanguage } from '../context/useLanguage'
import './Toolkit.css'

type Tool = {
  id: string
  name: string
  icon: ReactNode
}

/** Vinotinto tonal palette for layered logos */
const V = {
  deep: '#6e2e2e',
  base: '#843838',
  mid: '#9a4a4a',
  soft: '#b86a5c',
  light: '#d4a39a',
  cream: '#fdf8f6',
}

function IconShell({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span className={`toolkit__logo ${className}`.trim()} aria-hidden="true">
      {children}
    </span>
  )
}

const tools: Tool[] = [
  {
    id: 'cursor',
    name: 'Cursor',
    icon: (
      <IconShell>
        {/* Cursor — Simple Icons mark (first carousel) */}
        <svg viewBox="0 0 24 24" width="28" height="28" fill={V.base}>
          <path d="M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23" />
        </svg>
      </IconShell>
    ),
  },
  {
    id: 'google-ai',
    name: 'Google AI Studio',
    icon: (
      <IconShell>
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
          {/* Gemini-style four-point spark */}
          <path
            d="M12 2.4c.55 3.55 1.85 5.7 5.4 7.6-3.55.95-4.85 3.1-5.4 6.65-.55-3.55-1.85-5.7-5.4-6.65C10.15 8.1 11.45 5.95 12 2.4Z"
            fill={V.base}
          />
          <path
            d="M18.6 14.2c.28 1.55.85 2.45 2.4 3.2-1.55.4-2.12 1.3-2.4 2.85-.28-1.55-.85-2.45-2.4-3.2 1.55-.4 2.12-1.3 2.4-2.85Z"
            fill={V.soft}
          />
        </svg>
      </IconShell>
    ),
  },
  {
    id: 'make',
    name: 'Make',
    icon: (
      <IconShell>
        {/* Make — three columns tipping into place */}
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
          <rect
            x="3.4"
            y="4.8"
            width="3.6"
            height="14.4"
            rx="1.8"
            fill={V.base}
            transform="rotate(-28 5.2 12)"
          />
          <rect
            x="10.2"
            y="4.8"
            width="3.6"
            height="14.4"
            rx="1.8"
            fill={V.base}
            transform="rotate(-12 12 12)"
          />
          <rect x="16.8" y="4.8" width="3.6" height="14.4" rx="1.8" fill={V.base} />
        </svg>
      </IconShell>
    ),
  },
  {
    id: 'claude',
    name: 'Claude',
    icon: (
      <IconShell className="toolkit__logo--claude">
        <span className="toolkit__claude-star" />
      </IconShell>
    ),
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    icon: (
      <IconShell>
        <svg viewBox="0 0 24 24" width="28" height="28" fill={V.base}>
          <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.911 6.046 6.046 0 0 0-6.51-2.9A5.985 5.985 0 0 0 10.682 0a6.046 6.046 0 0 0-5.959 4.301 5.985 5.985 0 0 0-3.997 2.9 6.046 6.046 0 0 0 .743 7.096 5.98 5.98 0 0 0 .516 4.911 6.046 6.046 0 0 0 6.51 2.9A5.985 5.985 0 0 0 13.318 24a6.046 6.046 0 0 0 5.959-4.301 5.985 5.985 0 0 0 3.997-2.9 6.046 6.046 0 0 0-.743-7.096 5.985 5.985 0 0 0 .014-1.882zm-9.022 12.04a4.476 4.476 0 0 1-2.863-1.035l.141-.081 4.779-2.76a.794.794 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.507 4.491zM3.945 18.28a4.47 4.47 0 0 1-.535-3.014l.142.085 4.778 2.76a.771.771 0 0 0 .78 0l5.83-3.365v2.332a.08.08 0 0 1-.026.061l-4.831 2.79a4.502 4.502 0 0 1-6.138-1.649zM2.566 7.905a4.485 4.485 0 0 1 2.34-1.974V11.6a.782.782 0 0 0 .388.681l5.828 3.362-2.017 1.168a.075.075 0 0 1-.071 0l-4.83-2.787a4.504 4.504 0 0 1-1.638-6.12zm16.226.69-4.781-2.762a.77.77 0 0 0-.78 0L7.4 9.198V6.866a.078.078 0 0 1 .028-.061l4.83-2.787a4.482 4.482 0 0 1 6.68 1.634 4.49 4.49 0 0 1-.146 2.943zm2.197 2.99a4.46 4.46 0 0 1-.59 1.55l-.141-.085-4.778-2.76a.775.775 0 0 0-.785 0l-5.83 3.365v-2.332a.08.08 0 0 1 .028-.061l4.83-2.787a4.488 4.488 0 0 1 6.676 4.61 4.47 4.47 0 0 1-.41.5zM8.47 11.57l2.017-1.17 2.018 1.17v2.338l-2.017 1.168-2.018-1.168z" />
        </svg>
      </IconShell>
    ),
  },
  {
    id: 'looker',
    name: 'Looker',
    icon: (
      <IconShell>
        {/* Looker — large ring + branching nodes */}
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
          <circle cx="11.2" cy="17.4" r="4.1" stroke={V.base} strokeWidth="2.35" />
          <path
            d="M11.2 13.2V9.1M11.2 9.1 7.6 6.8M11.2 9.1 16.4 5.4"
            stroke={V.deep}
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="7.4" cy="6.5" r="1.7" fill={V.soft} />
          <circle cx="11.2" cy="9.1" r="1.85" fill={V.mid} />
          <circle cx="16.8" cy="4.9" r="1.7" fill={V.light} />
        </svg>
      </IconShell>
    ),
  },
  {
    id: 'excel',
    name: 'Excel',
    icon: (
      <IconShell>
        {/* Excel mark — sheet + X tile in vinotinto shades */}
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
          <path d="M10 3.5h9.2c.7 0 1.3.6 1.3 1.3v14.4c0 .7-.6 1.3-1.3 1.3H10V3.5Z" fill={V.light} />
          <path d="M10 8.2h10.5" stroke={V.cream} strokeWidth="1.4" />
          <path d="M10 12.6h10.5" stroke={V.cream} strokeWidth="1.4" />
          <path d="M10 17h10.5" stroke={V.cream} strokeWidth="1.4" />
          <path d="M14.2 3.5v17" stroke={V.cream} strokeWidth="1.2" />
          <rect x="3.2" y="6.2" width="9.2" height="11.6" rx="1.4" fill={V.base} />
          <path
            d="M5.5 8.6 9.9 15.4M9.9 8.6 5.5 15.4"
            stroke={V.cream}
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      </IconShell>
    ),
  },
  {
    id: 'powerpoint',
    name: 'PowerPoint',
    icon: (
      <IconShell>
        {/* PowerPoint — P tile + slide cues */}
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
          <rect x="9.5" y="4" width="11" height="16" rx="1.6" fill={V.cream} stroke={V.mid} strokeWidth="1.2" />
          <path
            d="M12.2 7.2a3.2 3.2 0 1 1 0 4.2"
            stroke={V.base}
            strokeWidth="1.35"
            fill="none"
          />
          <path d="M12.2 12.8h5.2M12.2 15.2h4" stroke={V.soft} strokeWidth="1.3" strokeLinecap="round" />
          <rect x="3" y="6.2" width="10" height="11.6" rx="1.4" fill={V.base} transform="rotate(-4 8 12)" />
          <path
            d="M6.2 9.2h2.4c1.35 0 2.35.95 2.35 2.25S9.95 13.7 8.6 13.7H6.2V9.2Zm0 0V16"
            stroke={V.cream}
            strokeWidth="1.55"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </IconShell>
    ),
  },
  {
    id: 'canva',
    name: 'Canva',
    icon: (
      <IconShell>
        {/* Canva script-inspired C mark */}
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
          <circle cx="12" cy="12" r="9.2" fill={V.base} />
          <path
            d="M15.6 9.1c-.7-1.15-1.95-1.9-3.45-1.9-2.55 0-4.35 2.15-4.35 4.85S9.6 16.9 12.15 16.9c1.45 0 2.7-.7 3.4-1.8"
            stroke={V.cream}
            strokeWidth="2.1"
            strokeLinecap="round"
          />
          <path
            d="M9.2 7.4c.55-.55 1.45-.85 2.35-.55.55.18.95.55 1.15 1"
            stroke={V.light}
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </IconShell>
    ),
  },
  {
    id: 'n8n',
    name: 'n8n',
    icon: (
      <IconShell>
        {/* n8n branching nodes */}
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
          <path
            d="M4.5 12h6.2M10.7 12l4.2-4.4M10.7 12l4.2 4.4"
            stroke={V.base}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="4.5" cy="12" r="2.15" fill={V.soft} />
          <circle cx="10.7" cy="12" r="2.15" fill={V.base} />
          <circle cx="16.2" cy="7" r="2.15" fill={V.mid} />
          <circle cx="16.2" cy="17" r="2.15" fill={V.deep} />
        </svg>
      </IconShell>
    ),
  },
  {
    id: 'notebooklm',
    name: 'NotebookLM',
    icon: (
      <IconShell>
        {/* NotebookLM — three nested arcs */}
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
          <path
            d="M4.2 19.8V5.4A9.6 9.6 0 0 1 19.8 19.8"
            stroke={V.base}
            strokeWidth="2.35"
            strokeLinecap="round"
          />
          <path
            d="M4.2 19.8V9.2A6.6 6.6 0 0 1 15.4 19.8"
            stroke={V.base}
            strokeWidth="2.35"
            strokeLinecap="round"
          />
          <path
            d="M4.2 19.8V13A3.6 3.6 0 0 1 11 19.8"
            stroke={V.base}
            strokeWidth="2.35"
            strokeLinecap="round"
          />
        </svg>
      </IconShell>
    ),
  },
]

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="toolkit__card">
      {tool.icon}
      <span className="toolkit__name">{tool.name}</span>
    </div>
  )
}

export function Toolkit() {
  const { t } = useLanguage()
  const loop = [...tools, ...tools]

  return (
    <section className="toolkit" id="toolkit" aria-labelledby="toolkit-title">
      <div className="container">
        <div className="section-head">
          <p className="section-eyebrow">{t.toolkit.eyebrow}</p>
          <h2 className="section-title" id="toolkit-title">
            {t.toolkit.title}
          </h2>
          <p className="toolkit__subtitle">{t.toolkit.subtitle}</p>
        </div>
      </div>

      <div className="toolkit__marquee" aria-hidden="true">
        <div className="toolkit__track">
          {loop.map((tool, index) => (
            <ToolCard key={`${tool.id}-${index}`} tool={tool} />
          ))}
        </div>
      </div>

      <ul className="toolkit__sr-only">
        {tools.map((tool) => (
          <li key={tool.id}>{tool.name}</li>
        ))}
      </ul>
    </section>
  )
}

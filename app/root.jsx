import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'
import globalStyles from '~/Styles/global.css'
import indexStyles from '~/Styles/index.css'
import nes from 'nes.css/css/nes.min.css'
import socialMediaStyles from '~/Styles/socialMediaStyles.css'
import aboutStyles from '~/Styles/aboutStyle.css'
import projectsStyles from '~/Styles/projectsStyles.css'

export const meta = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1'
})

export const links = () => ([
  {
    rel: 'stylesheet',
    href: globalStyles
  },
  {
    rel: 'stylesheet',
    href: indexStyles
  },
  {
    rel: 'stylesheet',
    href: nes
  },
  {
    rel: 'stylesheet',
    href: socialMediaStyles
  },
  {
    rel: 'stylesheet',
    href: aboutStyles
  },
  {
    rel: 'stylesheet',
    href: projectsStyles
  }
])

export default function App () {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

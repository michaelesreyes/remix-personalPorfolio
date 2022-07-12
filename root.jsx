import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'
import globalStyles from '~/Styles/global.css'
import indexStyle from '~/Styles/index.css'
import 'nes.css/css/nes.min.css'

export const nes = 'https://unpkg.com/nes.css@latest/css/nes.min.css'
export const font = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap'

export const meta = () => ({
  charset: 'utf-8',
  title: 'Michael Remix App',
  viewport: 'width=device-width,initial-scale=1'
})

export const links = () => ([
  {
    rel: 'stylesheet',
    href: globalStyles
  },
  {
    rel: 'stylesheet',
    href: indexStyle
  },
  {
    rel: 'stylesheet',
    href: nes
  },
  {
    rel: 'stylesheet',
    href: font
  }
])
function Layout () {
  return (
    <>
      <header>
        <h1 class="layout-title">Michael Remix App</h1>
      </header>
      <Outlet />
      <footer>
        ©️ 2020 Michael. All rights reserved.
      </footer>
    </>
  )
}
export default function App () {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

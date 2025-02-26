import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'
import React from 'react'
import type { LinksFunction } from 'react-router'

import './styles/app.css'

export const links: LinksFunction = () => []

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta />
      <Links />
    </head>
    <body>
      {children}
      <ScrollRestoration />
      <Scripts />
    </body>
  </html>
)

export default function App() {
  return <Outlet />
}

import {Links, Meta, Outlet, Scripts, ScrollRestoration} from 'react-router'
import {QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {queryClient} from '@util/react-query'
import type {LinksFunction} from 'react-router'

import './styles/app.css'

export const links: LinksFunction = () => []

export const Layout = ({children}: {children: React.ReactNode}) => (
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
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

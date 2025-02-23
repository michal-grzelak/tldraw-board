import { type MetaFunction } from 'react-router'
import { Home } from '@components/Home'
import { getHostname } from '@util/hostname'
import type { Route } from './+types'

export const meta: MetaFunction = () => {
  return [{ title: 'React Router + Fastify' }]
}

export const loader = async (): Promise<{ users: string[] }> => {
  const res = await fetch(`${getHostname()}/api/users`)
  return res.json()
}

export default function Index({ loaderData }: Readonly<Route.ComponentProps>) {
  return (
    <main>
      <Home users={loaderData.users} />
    </main>
  )
}

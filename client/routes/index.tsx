import {Home} from '@components/Home'
import {ensureUsersData} from './index.queries'

import type {MetaFunction} from 'react-router'

export const meta: MetaFunction = () => {
  return [{title: 'React Router + Fastify'}]
}

export const clientLoader = (): Promise<{users: string[]}> => ensureUsersData()

export default function Index() {
  return (
    <main>
      <Home />
    </main>
  )
}

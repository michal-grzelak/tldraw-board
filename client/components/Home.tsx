import {useUsersQuery} from '@routes/index.queries'

export const Home = () => {
  const {data, isPending, isError} = useUsersQuery()
  if (isPending) {
    return <p>loading users</p>
  }
  if (isError) {
    return <p>error loading users</p>
  }

  const {users} = data

  return (
    <section className="mx-auto mt-8 max-w-fit">
      <h1 className="text-3xl">React Router + Fastify</h1>
      <h2 className="mt-8 text-xl">Users from API</h2>
      <ul className="mt-2">
        {users.map((user) => (
          <li key={user} className="text-gray-600">
            {user}
          </li>
        ))}
      </ul>
    </section>
  )
}

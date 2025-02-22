import {queryClient} from '@client/util/react-query'
import {queryOptions, useQuery} from '@tanstack/react-query'
export type UsersResponse = {users: string[]}

export const usersQueryOptions = () => {
  return queryOptions<UsersResponse>({
    queryKey: ['users-list'],
    queryFn: async () => {
      const res = await fetch('/api/users')
      return res.json()
    },
    staleTime: 5000,
  })
}

export const ensureUsersData = async () => {
  return queryClient.ensureQueryData(usersQueryOptions())
}

export const useUsersQuery = () => {
  return useQuery(usersQueryOptions())
}

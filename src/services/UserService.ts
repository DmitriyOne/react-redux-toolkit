import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IUser } from '../model/interfaces/IUser'

export const usersAPI = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com'
  }),
  endpoints: (build) => ({
    fetchAllUsers: build.query<IUser[], number | undefined>({
      query: (limit) => ({
        url: '/users',
        params: {
          _limit: limit,
        }
      })
    }),
    getUser: build.query<IUser, string>({
      query: (id) => ({
        url: `/users/${id}`
      })
    })
  })
})

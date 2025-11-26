import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '../store';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://buddyscript-server.onrender.com/api/v1',
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const token = state.auth?.token; // use optional chaining

      if (token) {
        headers.set('Authorization', `${token}`); // include Bearer
      }
      return headers;
    },
  }),
  tagTypes: ['Post'],
  endpoints: () => ({}),
});

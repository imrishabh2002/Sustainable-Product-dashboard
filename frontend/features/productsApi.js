import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ search = '', category = '', page = 1, limit = 5 }) =>
        `products?search=${search}&category=${category}&page=${page}&limit=${limit}`,
      providesTags: ['Products'],
    }),
    addProduct: builder.mutation({
      query: (product) => ({
        url: 'products',
        method: 'POST',
        body: product,
      }),
      invalidatesTags: ['Products'],
    }),
    getTopProducts: builder.query({
      query: () => 'products/top',
    }),
  }),
});

export const { useGetProductsQuery, useAddProductMutation, useGetTopProductsQuery } = productsApi;

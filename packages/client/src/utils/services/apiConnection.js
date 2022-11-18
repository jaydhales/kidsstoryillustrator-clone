import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const ApiHeaders = {
    Accept: 'application/json',
};
const baseUrl = '/';
const createRequest = (url, method) => ({
    url,
    headers: ApiHeaders,
    method,
});

const apiConnection = createApi({
    reducerPath: 'Api',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: [],
    endpoints: (builder) => ({
        
    }),
});
export default apiConnection;

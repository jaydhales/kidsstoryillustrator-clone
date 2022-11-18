import { configureStore } from '@reduxjs/toolkit';

import apiConnection from './apiConnection';
import AppSlice from './appSlice';

const store = configureStore({
    reducer: {
        [AppSlice.name]: AppSlice.reducer,
        [apiConnection.reducerPath]: apiConnection.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiConnection.middleware),
});

export default store;

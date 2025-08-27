import { diagnosisApi } from "@/store/apis/Diagnosis";
import { organizationApi } from "@/store/apis/Organization";
import { problemApi } from "@/store/apis/Problem";
import { userApi } from "@/store/apis/User";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [organizationApi.reducerPath]: organizationApi.reducer,
    [diagnosisApi.reducerPath]: diagnosisApi.reducer,
    [problemApi.reducerPath]: problemApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      diagnosisApi.middleware,
      problemApi.middleware,
      organizationApi.middleware
    ),
  devTools: true, // Force enable Redux DevTools
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

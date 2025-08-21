import { diagnosisApi } from "@/store/apis/Diagnosis";
import { userApi } from "@/store/apis/User";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [diagnosisApi.reducerPath]: diagnosisApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      diagnosisApi.middleware
    ),
  devTools: true, // Force enable Redux DevTools
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

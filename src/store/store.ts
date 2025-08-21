import { diagnosisApi } from "@/store/apis/Diagnosis";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [diagnosisApi.reducerPath]: diagnosisApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      diagnosisApi.middleware
    ),
  devTools: true, // Force enable Redux DevTools
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

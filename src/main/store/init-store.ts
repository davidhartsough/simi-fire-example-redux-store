import { configureStore, Store, Reducer } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import type { Storage, Persistor } from "redux-persist/es/types";

export type StoreAndPersistor = {
  store: Store;
  persistor: Persistor;
};
export type StorePersistor = Persistor;

export default function initStore(
  key: string,
  storage: Storage,
  reducer: Reducer
): StoreAndPersistor {
  const persistConfig = { key, storage };
  const persistedReducer = persistReducer(persistConfig, reducer);
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
      }),
  });
  const persistor = persistStore(store);
  return { store, persistor };
}

import { Store, Reducer } from "@reduxjs/toolkit";
import type { Storage, Persistor } from "redux-persist/es/types";
export type StoreAndPersistor = {
    store: Store;
    persistor: Persistor;
};
export type StorePersistor = Persistor;
export default function initStore(key: string, storage: Storage, reducer: Reducer): StoreAndPersistor;

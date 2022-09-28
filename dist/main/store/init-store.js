"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toolkit_1 = require("@reduxjs/toolkit");
var redux_persist_1 = require("redux-persist");
function initStore(key, storage, reducer) {
    var persistConfig = { key: key, storage: storage };
    var persistedReducer = (0, redux_persist_1.persistReducer)(persistConfig, reducer);
    var store = (0, toolkit_1.configureStore)({
        reducer: persistedReducer,
        middleware: function (getDefaultMiddleware) {
            return getDefaultMiddleware({
                serializableCheck: false,
                immutableCheck: false,
            });
        },
    });
    var persistor = (0, redux_persist_1.persistStore)(store);
    return { store: store, persistor: persistor };
}
exports.default = initStore;
//# sourceMappingURL=init-store.js.map
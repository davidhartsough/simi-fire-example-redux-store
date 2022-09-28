"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeThingsFromGroup = exports.putThingsInGroup = exports.deleteThingsOfGroup = exports.deleteThings = exports.deleteThing = exports.removeThing = exports.updateThings = exports.updateThing = exports.modifyThing = exports.createThings = exports.createThing = exports.receiveThings = exports.thingsSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = [];
exports.thingsSlice = (0, toolkit_1.createSlice)({
    name: "things",
    initialState: initialState,
    reducers: {
        receiveThings: function (_, _a) {
            var payload = _a.payload;
            return payload;
        },
        createThing: function (state, _a) {
            var payload = _a.payload;
            if (!state.some(function (_a) {
                var id = _a.id;
                return id === payload.id;
            })) {
                state.unshift(payload);
            }
        },
        createThings: function (state, _a) {
            var payload = _a.payload;
            var ids = new Set(state.map(function (_a) {
                var id = _a.id;
                return id;
            }));
            var newThings = payload.filter(function (_a) {
                var id = _a.id;
                return !ids.has(id);
            });
            state.unshift.apply(state, newThings);
        },
        modifyThing: function (state, _a) {
            var _b = _a.payload, thingId = _b.thingId, thingUpdate = _b.thingUpdate;
            var index = state.findIndex(function (_a) {
                var id = _a.id;
                return id === thingId;
            });
            if (index !== -1) {
                state[index] = __assign(__assign({}, state[index]), thingUpdate);
            }
        },
        updateThing: function (state, _a) {
            var payload = _a.payload;
            var index = state.findIndex(function (_a) {
                var id = _a.id;
                return id === payload.id;
            });
            if (index !== -1) {
                state[index] = payload;
            }
        },
        updateThings: function (state, _a) {
            var payload = _a.payload;
            payload.forEach(function (thing) {
                var index = state.findIndex(function (_a) {
                    var id = _a.id;
                    return id === thing.id;
                });
                if (index !== -1) {
                    state[index] = __assign(__assign({}, state[index]), thing);
                }
            });
        },
        removeThing: function (state, _a) {
            var payload = _a.payload;
            return state.filter(function (_a) {
                var id = _a.id;
                return id !== payload;
            });
        },
        deleteThing: function (state, _a) {
            var payload = _a.payload;
            var index = state.findIndex(function (thing) { return thing.id === payload; });
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        deleteThings: function (state, _a) {
            var payload = _a.payload;
            return state.filter(function (_a) {
                var id = _a.id;
                return !payload.includes(id);
            });
        },
        putThingsInGroup: function (state, _a) {
            var _b = _a.payload, thingIds = _b.thingIds, groupId = _b.groupId;
            thingIds.forEach(function (thingId) {
                var index = state.findIndex(function (_a) {
                    var id = _a.id;
                    return id === thingId;
                });
                if (index !== -1) {
                    state[index].group = groupId;
                }
            });
        },
        deleteThingsOfGroup: function (state, _a) {
            var payload = _a.payload;
            return state.filter(function (_a) {
                var group = _a.group;
                return group !== payload;
            });
        },
        removeThingsFromGroup: function (state, _a) {
            var payload = _a.payload;
            payload.forEach(function (thingId) {
                var index = state.findIndex(function (_a) {
                    var id = _a.id;
                    return id === thingId;
                });
                if (index !== -1) {
                    state[index].group = null;
                }
            });
        },
    },
});
exports.receiveThings = (_a = exports.thingsSlice.actions, _a.receiveThings), exports.createThing = _a.createThing, exports.createThings = _a.createThings, exports.modifyThing = _a.modifyThing, exports.updateThing = _a.updateThing, exports.updateThings = _a.updateThings, exports.removeThing = _a.removeThing, exports.deleteThing = _a.deleteThing, exports.deleteThings = _a.deleteThings, exports.deleteThingsOfGroup = _a.deleteThingsOfGroup, exports.putThingsInGroup = _a.putThingsInGroup, exports.removeThingsFromGroup = _a.removeThingsFromGroup;
exports.default = exports.thingsSlice.reducer;
//# sourceMappingURL=slice.js.map
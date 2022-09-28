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
exports.deleteGroups = exports.deleteGroup = exports.removeGroup = exports.updateGroups = exports.updateGroup = exports.modifyGroup = exports.createGroups = exports.createGroup = exports.receiveGroups = exports.groupsSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = [];
exports.groupsSlice = (0, toolkit_1.createSlice)({
    name: "groups",
    initialState: initialState,
    reducers: {
        receiveGroups: function (_, _a) {
            var payload = _a.payload;
            return payload;
        },
        createGroup: function (state, _a) {
            var payload = _a.payload;
            if (!state.some(function (_a) {
                var id = _a.id;
                return id === payload.id;
            })) {
                state.unshift(payload);
            }
        },
        createGroups: function (state, _a) {
            var payload = _a.payload;
            var ids = new Set(state.map(function (_a) {
                var id = _a.id;
                return id;
            }));
            var newGroups = payload.filter(function (_a) {
                var id = _a.id;
                return !ids.has(id);
            });
            state.unshift.apply(state, newGroups);
        },
        modifyGroup: function (state, _a) {
            var _b = _a.payload, groupId = _b.groupId, groupUpdate = _b.groupUpdate;
            var index = state.findIndex(function (_a) {
                var id = _a.id;
                return id === groupId;
            });
            if (index !== -1) {
                state[index] = __assign(__assign({}, state[index]), groupUpdate);
            }
        },
        updateGroup: function (state, _a) {
            var payload = _a.payload;
            var index = state.findIndex(function (_a) {
                var id = _a.id;
                return id === payload.id;
            });
            if (index !== -1) {
                state[index] = payload;
            }
        },
        updateGroups: function (state, _a) {
            var payload = _a.payload;
            payload.forEach(function (group) {
                var index = state.findIndex(function (_a) {
                    var id = _a.id;
                    return id === group.id;
                });
                if (index !== -1) {
                    state[index] = __assign(__assign({}, state[index]), group);
                }
            });
        },
        removeGroup: function (state, _a) {
            var payload = _a.payload;
            return state.filter(function (_a) {
                var id = _a.id;
                return id !== payload;
            });
        },
        deleteGroup: function (state, _a) {
            var payload = _a.payload;
            var index = state.findIndex(function (group) { return group.id === payload; });
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        deleteGroups: function (state, _a) {
            var payload = _a.payload;
            return state.filter(function (_a) {
                var id = _a.id;
                return !payload.includes(id);
            });
        },
    },
});
exports.receiveGroups = (_a = exports.groupsSlice.actions, _a.receiveGroups), exports.createGroup = _a.createGroup, exports.createGroups = _a.createGroups, exports.modifyGroup = _a.modifyGroup, exports.updateGroup = _a.updateGroup, exports.updateGroups = _a.updateGroups, exports.removeGroup = _a.removeGroup, exports.deleteGroup = _a.deleteGroup, exports.deleteGroups = _a.deleteGroups;
exports.default = exports.groupsSlice.reducer;
//# sourceMappingURL=slice.js.map
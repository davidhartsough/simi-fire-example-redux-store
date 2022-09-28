"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResetPasswordEmail = exports.handleAuthState = exports.initDatabase = void 0;
__exportStar(require("./main/store/index"), exports);
__exportStar(require("./main/store/auth/actions"), exports);
__exportStar(require("./main/types"), exports);
__exportStar(require("./main/utils"), exports);
var simi_fire_1 = require("simi-fire");
Object.defineProperty(exports, "initDatabase", { enumerable: true, get: function () { return simi_fire_1.initDatabase; } });
Object.defineProperty(exports, "handleAuthState", { enumerable: true, get: function () { return simi_fire_1.handleAuthState; } });
Object.defineProperty(exports, "sendResetPasswordEmail", { enumerable: true, get: function () { return simi_fire_1.sendResetPasswordEmail; } });
//# sourceMappingURL=index.js.map
export * from "./main/store/index";
export * from "./main/store/auth/actions";
export * from "./main/types";
export * from "./main/utils";

export {
  initDatabase,
  handleAuthState,
  sendResetPasswordEmail,
} from "simi-fire";

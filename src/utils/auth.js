import Cookies from "js-cookie";

const TokenKey = "Admin-Token";
const TenantKey = "tenant";
const UserId = "1";

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}

export function getTenant() {
  return Cookies.get(TenantKey);
}

export function setTenant(token) {
  return Cookies.set(TenantKey, token);
}

export function getUserId() {
  return Cookies.get(UserId);
}

export function setUserId(token) {
  return Cookies.set(UserId, token);
}

import http from "./httpService";
import { apiUrl } from "../config.json";

export function login(email, password) {
  return http.post(apiUrl + "/login", { email, password });
}
export function register(user) {
  return http.post(apiUrl + "/owner", {
    id: user.id,
    email: user.email,
    firstName: user.password,
    lastName: user.name,
    password: user.password,
    mobile: user.mobile,
    notes: user.notes,
    phone: user.phone,
  });
}

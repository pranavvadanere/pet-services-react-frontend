import http from "./httpService";
import { apiUrl } from "../config.json";

export function register(facility) {
  return http.post(apiUrl + "/facility-add", {
    facilityName: facility.facilityName,
    address: facility.address,
    phone: facility.phone,
    email: facility.email,
    contactPerson: facility.contactPerson,
  });
}

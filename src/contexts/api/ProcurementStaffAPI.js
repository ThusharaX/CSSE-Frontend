import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class ProcurementStaffAPI {
	// Procurement Staff Login
	static login(values) {
		return axios.post(`${BASE_URL}/procurement-staff/login`, values, requestConfigJson);
	}

	// Procurement Staff Register
	static registerProcurementStaff(values) {
		return axios.post(`${BASE_URL}/procurement-staff/signup`, values, requestConfigJson);
	}

	// Get Procurement Staff details
	static getProcurementStaffDetails(uid) {
		return axios.get(`${BASE_URL}/procurement-staff/${uid}`, requestConfig);
	}

	// Update Procurement Staff Details
	static updateProcurementStaff(uid, values) {
		return axios.put(`${BASE_URL}/procurement-staff/${uid}`, values, requestConfigJson);
	}

	// Delete Procurement Staff
	static deleteProcurementStaff(uid) {
		return axios.delete(`${BASE_URL}/procurement-staff/${uid}`, requestConfig);
	}

	// Get All Procurement Staff
	static getAllProcurementStaff() {
		return axios.get(`${BASE_URL}/procurement-staff/`, requestConfig);
	}
}

export default ProcurementStaffAPI;

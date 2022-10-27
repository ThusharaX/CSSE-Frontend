import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class AdminAPI {
	// Admin Login
	static login(values) {
		return axios.post(`${BASE_URL}/admin/login`, values, requestConfigJson);
	}

	// Admin Register
	static register(values) {
		return axios.post(`${BASE_URL}/admin/signup`, values, requestConfigJson);
	}

	// Get Admin Details
	static getAdminDetails(uid) {
		return axios.get(`${BASE_URL}/admin/${uid}`, requestConfig);
	}

	// Update Admin Details
	static updateProfile(uid, values) {
		return axios.put(`${BASE_URL}/admin-edit/${uid}`, values, requestConfigJson);
	}

	// Get All Admins
	// static getAllAdmins() {
	// 	return axios.get(`${BASE_URL}/admin/admins/all`, requestConfig);
	// }

	// Delete Admin
	static deleteAdmin(uid) {
		return axios.delete(`${BASE_URL}/admin-delete/${uid}`, requestConfig);
	}
}

export default AdminAPI;

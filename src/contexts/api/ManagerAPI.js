import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class ManagerAPI {
	// Manager Login
	static loginManager(values) {
		return axios.post(`${BASE_URL}/manager/login`, values, requestConfigJson);
	}

	// Manager Register
	static registerManager(values) {
		return axios.post(`${BASE_URL}/manager/signup`, values, requestConfigJson);
	}

	// Get Manager details
	static getManagerDetails(uid) {
		return axios.get(`${BASE_URL}/manager/${uid}`, requestConfig);
	}

	// Update Manager details
	static updateSiteManager(uid, values) {
		return axios.put(`${BASE_URL}/manager/${uid}`, values, requestConfigJson);
	}

	// Delete Manager
	static deleteManager(uid) {
		return axios.delete(`${BASE_URL}/manager/${uid}`, requestConfig);
	}

	// Get all Manager
	static getAllManagers() {
		return axios.get(`${BASE_URL}/manager/`, requestConfig);
	}
}

export default ManagerAPI;

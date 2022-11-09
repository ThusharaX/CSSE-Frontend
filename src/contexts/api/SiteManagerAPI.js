import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class SiteManagerAPI {
	// Site Manager Login
	static loginSiteManager(values) {
		return axios.post(`${BASE_URL}/site-manager/login`, values, requestConfigJson);
	}

	// Site Manager Register
	static registerSiteManager(values) {
		return axios.post(`${BASE_URL}/site-manager/signup`, values, requestConfigJson);
	}

	// Get Site Manager details
	static getSiteManagerDetails(uid) {
		return axios.get(`${BASE_URL}/site-manager/${uid}`, requestConfig);
	}

	// Update Site Manager Details
	static updateSiteManager(uid, values) {
		return axios.put(`${BASE_URL}/site-manager/${uid}`, values, requestConfigJson);
	}

	// Delete Site Manager
	static deleteSiteManager(uid) {
		return axios.delete(`${BASE_URL}/site-manager/${uid}`, requestConfig);
	}

	// Get All Site Managers
	static getAllSiteManagers() {
		return axios.get(`${BASE_URL}/site-manager/`, requestConfig);
	}
}

export default SiteManagerAPI;

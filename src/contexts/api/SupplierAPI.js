import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class SupplierAPI {
	// Supplier Login
	static loginSupplier(values) {
		return axios.post(`${BASE_URL}/supplier/login`, values, requestConfigJson);
	}

	// Supplier Register
	static registerSupplier(values) {
		return axios.post(`${BASE_URL}/supplier/signup`, values, requestConfigJson);
	}

	// Get Supplier details
	static getSupplierDetails(uid) {
		return axios.get(`${BASE_URL}/supplier/${uid}`, requestConfig);
	}

	// Update Supplier Details
	static updateSupplier(uid, values) {
		return axios.put(`${BASE_URL}/supplier/${uid}`, values, requestConfigJson);
	}

	// Delete Supplier
	static deleteSupplier(uid) {
		return axios.delete(`${BASE_URL}/supplier/${uid}`, requestConfig);
	}

	// Get All Suppliers
	static getAllSupplier() {
		return axios.get(`${BASE_URL}/supplier/`, requestConfig);
	}
}

export default SupplierAPI;

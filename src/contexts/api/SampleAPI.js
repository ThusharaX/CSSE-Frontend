import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class SampleAPI {
	// Get all samples
	static getSamples() {
		return axios.get(`${BASE_URL}/sample/`, requestConfig);
	}

	// Add a new sample
	static createSample(newSample) {
		return axios.post(`${BASE_URL}/sample/`, newSample, requestConfigJson);
	}

	// Get samples by admin_id
	static getSampleByAdminId(admin_id) {
		return axios.get(`${BASE_URL}/samples/admin/${admin_id}`, requestConfig);
	}

	// Delete a sample
	static deleteSample(sample_id) {
		return axios.delete(`${BASE_URL}/sample/${sample_id}`, requestConfig);
	}

	// Edit a sample
	static editSample(sample_id, updatedSample) {
		return axios.put(`${BASE_URL}/sample/${sample_id}`, updatedSample, requestConfigJson);
	}

	// Get a sample by id
	static getSampleById(sample_id) {
		return axios.get(`${BASE_URL}/sample/${sample_id}`, requestConfig);
	}

	// Search samples
	static searchSample(searchTerm) {
		return axios.get(`${BASE_URL}/sample/search/${searchTerm}`, requestConfig);
	}
}

export default SampleAPI;

import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class ProductAPI {
	// Get all productss
	static getProducts() {
		return axios.get(`${BASE_URL}/product/`, requestConfig);
	}

	// Add a new product
	static createProduct(newProduct) {
		return axios.post(`${BASE_URL}/product/`, newProduct, requestConfigJson);
	}

	// Delete a product
	static deleteProduct(product_id) {
		return axios.delete(`${BASE_URL}/product-delete/${product_id}`, requestConfig);
	}

	// Edit a product
	static editProduct(product_id, updatedProduct) {
		return axios.put(`${BASE_URL}/product-edit/${product_id}`, updatedProduct, requestConfigJson);
	}

	// Get a product by id
	static getProductById(product_id) {
		return axios.get(`${BASE_URL}/sample/${product_id}`, requestConfig);
	}

	// Search products
	static searchProduct(searchTerm) {
		return axios.get(`${BASE_URL}/product/${searchTerm}`, requestConfig);
	}
}

export default ProductAPI;

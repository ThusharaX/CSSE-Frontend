import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class OrderAPI {
	// Get all Orders
	static getOrders() {
		return axios.get(`${BASE_URL}/order/`, requestConfig);
	}

	// Add a new Order
	static createOrder(newOrder) {
		return axios.post(`${BASE_URL}/order/`, newOrder, requestConfigJson);
	}

	// Delete an Order
	static deleteOrder(Order_id) {
		return axios.delete(`${BASE_URL}/order/${Order_id}`, requestConfig);
	}

	// Edit an Order
	static editOrder(Order_id, updatedOrder) {
		return axios.put(`${BASE_URL}/order/${Order_id}`, updatedOrder, requestConfigJson);
	}

	// Get an Order by id
	static getOrderById(Order_id) {
		return axios.get(`${BASE_URL}/order/${Order_id}`, requestConfig);
	}

	// Search Orders
	static searchOrder(searchTerm) {
		return axios.get(`${BASE_URL}/order/${searchTerm}`, requestConfig);
	}
}

export default OrderAPI;

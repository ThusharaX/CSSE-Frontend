import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OrderAPI from "./api/OrderApi";

const OrderContext = createContext();

export function OrderProvider({ children }) {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [orders, setOrders] = useState([]);

	// Camping Package
	const [order, setOrder] = useState({
		requiredDate: "",
		company: "",
		agreedPrice: "",
		quantity: "",
		description: "",
		address: "",
		status: "",
		productID: "",
		productName: "",
		siteManagerID: "",
		deletedAt: "",
	});

	useEffect(() => {
		setIsLoading(true);
		OrderAPI.getOrders().then((response) => {
			setOrders(response.data);
			setIsLoading(false);
		});
	}, []);

	// Add Hotel Package
	const createOrder = async (newProduct) => {
		// eslint-disable-next-line no-console
		//console.log("Owner ID context :" + newCampingPackage.vendorId);

		try {
			setIsLoading(true);
			const response = await OrderAPI.createOrder(newOrder);
			setOrders([...orders, response.data]);
			setIsLoading(false);
			alert("Data added successfully...");
			//navigate("/procurement-staff");
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	//get One Camping Package

	const getOneOrder = (id) => {
		useEffect(() => {
			OrderAPI.getOrderById(id).then((res) => {
				setOrder(res.data);
			});
		}, []);
	};

	// Edit camping Package
	const editOrderStatus = (values) => {
		const newOrderStatus = {
			status: values.status,
		};
		OrderAPI.editOrderStatus(values.id, newOrderStatus)
			.then((response) => {
				//console.log(res.data);
				//navigate("/viewres");
				// eslint-disable-next-line no-console
				console.log(" Status updated successfully...");
				//navigate("/procurement-staff");
			})
			.catch((err) => {
				// eslint-disable-next-line no-console
				console.log(err);
			});
	};

	// Delete trainer and update UI
	const deleteOrder = (id) => {
		ProductAPI.deleteOrder(id).then(() => {
			setOrders(orders.filter((pro) => pro._id !== id));
		});
	};

	return (
		<OrderContext.Provider
			value={{
				isLoading,
				orders,
				createOrder,
				getOneOrder,
				editOrderStatus,
				deleteOrder,
				setOrder,
				order,
			}}
		>
			{children}
		</OrderContext.Provider>
	);
}

export default OrderContext;

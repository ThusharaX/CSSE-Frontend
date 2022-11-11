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
		productName: "",
		
	});

	useEffect(() => {
		setIsLoading(true);
		ProductAPI.getProducts().then((response) => {
			setProducts(response.data);
			setIsLoading(false);
		});
	}, []);

	// Add Hotel Package
	const createProduct = async (newProduct) => {
		// eslint-disable-next-line no-console
		//console.log("Owner ID context :" + newCampingPackage.vendorId);

		try {
			setIsLoading(true);
			const response = await ProductAPI.createProduct(newProduct);
			setProducts([...products, response.data]);
			setIsLoading(false);
			alert("Data added successfully...");
			navigate("/procurement-staff");
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	//get One Camping Package

	const getOneProduct = (id) => {
		useEffect(() => {
			ProductAPI.getProductById(id).then((res) => {
				setProduct(res.data);
			});
		}, []);
	};

	// Edit camping Package
	const editProduct = (values) => {
		const newProduct = {
			productName: values.productName,
			price: values.price,
		};
		ProductAPI.editProduct(values.id, newProduct)
			.then((response) => {
				//console.log(res.data);
				//navigate("/viewres");
				// eslint-disable-next-line no-console
				console.log("updated successfully...");
				navigate("/procurement-staff");
			})
			.catch((err) => {
				// eslint-disable-next-line no-console
				console.log(err);
			});
	};

	// Delete trainer and update UI
	const deleteProduct = (id) => {
		ProductAPI.deleteProduct(id).then(() => {
			setProducts(products.filter((pro) => pro._id !== id));
		});
	};

	return (
		<ProductContext.Provider
			value={{
				isLoading,
				products,
				createProduct,
				getOneProduct,
				editProduct,
				deleteProduct,
				setProduct,
				product,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
}

export default ProductContext;

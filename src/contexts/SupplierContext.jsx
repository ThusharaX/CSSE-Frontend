import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SupplierAPI from "./api/SupplierAPI";

import Joi from "joi";

import { makeToast } from "../components";

const SupplierContext = createContext();

export function SupplierProvider({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState(null);
	const navigate = useNavigate();

	const [supplier, setSupplier] = useState({
		uID: "",
		name: "",
		email: "",
		password: "",
		contact: "",
	});

	// Get all Suppliers
	const [suppliers, setSuppliers] = useState([]);

	// Login Form Validation
	const LoginFormSchema = Joi.object({
		email: Joi.string()
			.email({ tlds: { allow: false } })
			.message("Email should be valid"),
		password: Joi.string().min(3).message("Password should be valid"),
	});

	// Site Manager Login
	const supplierLogin = (values) => {
		setIsLoading(true);
		// Validate
		const { error } = LoginFormSchema.validate(values);
		if (error) {
			makeToast({ type: "error", message: error.details[0].message });
			return;
		}

		SupplierAPI.loginSupplier(values)
			.then((response) => {
				localStorage.setItem("uID", response.data._id);
				localStorage.setItem("email", response.data.email);
				localStorage.setItem("authToken", response.data.token);
				localStorage.setItem("permissionLevel", response.data.permissionLevel);
				navigate("/supplier");
				setIsLoggedIn(true);
				setIsLoading(false);
				window.location.reload();
				makeToast({ type: "success", message: "Login Successful" });
			})
			.catch((err) => {
				// Show toast
				setMessage(err.response.data.details.message);
				setIsLoading(false);
				makeToast({ type: "error", message: "Invalid Email or Password" });
			});
	};

	// Delete Supplier
	const deleteSupplier = async (id) => {
		try {
			setIsLoading(true);
			await SupplierAPI.deleteSupplier(id);
			setSuppliers(supplier.filter((supplier) => supplier._id !== id));
			makeToast({ type: "success", message: "Supplier deleted successfully" });
			setIsLoading(false);
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	// Update Supplier
	const updateSupplier = (values) => {
		const uID = localStorage.getItem("uID");
		setIsLoading(true);
		SupplierAPI.updateSupplier(uID, values)
			.then((response) => {
				setSupplier(response.data);
				setIsLoading(false);
				makeToast({ type: "success", message: "Profile Updated Successfully" });
				navigate("/supplier");
			})
			.catch((err) => {
				setMessage(err.response.data.details.message);
				setIsLoading(false);
			});
	};

	useEffect(() => {
		if (localStorage.getItem("uID")) {
			SupplierAPI.getSupplierDetails(localStorage.getItem("uID")).then((response) => {
				setSupplier(response.data);
			});
			// AdminAPI.getAllAdmins().then((response) => {
			// 	setAdmins(response.data);
			// });
		}
	}, [suppliers]);

	return (
		<SupplierContext.Provider
			value={{
				isLoggedIn,
				isLoading,
				supplierLogin,
				supplier,
				message,
				setSupplier,
				suppliers,
				setSuppliers,
				deleteSupplier,
				updateSupplier,
			}}
		>
			{children}
		</SupplierContext.Provider>
	);
}

export default SupplierContext;

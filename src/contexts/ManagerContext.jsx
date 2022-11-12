import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ManagerAPI from "./api/ManagerAPI";

import Joi from "joi";

import { makeToast } from "../components";

const ManagerContext = createContext();

export function ManagerProvider({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState(null);
	const navigate = useNavigate();

	const [manager, setManager] = useState({
		uID: "",
		name: "",
		email: "",
		password: "",
		contact: "",
		nic: "",
		permissionLevel: "",
	});

	// Get all Site managers
	const [managers, setManagers] = useState([]);

	// Login Form Validation
	const LoginFormSchema = Joi.object({
		email: Joi.string()
			.email({ tlds: { allow: false } })
			.message("Email should be valid"),
		password: Joi.string().min(3).message("Password should be valid"),
	});

	//  Manager Login
	const ManagerLogin = (values) => {
		setIsLoading(true);
		// Validate
		const { error } = LoginFormSchema.validate(values);
		if (error) {
			makeToast({ type: "error", message: error.details[0].message });
			return;
		}

		ManagerAPI.loginManager(values)
			.then((response) => {
				localStorage.setItem("uID", response.data._id);
				localStorage.setItem("email", response.data.email);
				localStorage.setItem("authToken", response.data.token);
				localStorage.setItem("permissionLevel", response.data.permissionLevel);
				navigate("/manager");
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

	// Delete Site Manager
	const deleteManager = async (id) => {
		try {
			setIsLoading(true);
			await ManagerAPI.deleteeManager(id);
			setManagers(manager.filter((Manager) => Manager._id !== id));
			makeToast({ type: "success", message: "Manager deleted successfully" });
			setIsLoading(false);
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	// Update  Manager
	const updateManager = (values) => {
		const uID = localStorage.getItem("uID");
		setIsLoading(true);
		ManagerAPI.updateManager(uID, values)
			.then((response) => {
				setManager(response.data);
				setIsLoading(false);
				makeToast({ type: "success", message: "Profile Updated Successfully" });
				navigate("/manager");
			})
			.catch((err) => {
				setMessage(err.response.data.details.message);
				setIsLoading(false);
			});
	};

	useEffect(() => {
		if (localStorage.getItem("uID")) {
			ManagerAPI.getManagerDetails(localStorage.getItem("uID")).then((response) => {
				setManager(response.data);
				// eslint-disable-next-line no-console
				console.log(response.data);
			});
			// AdminAPI.getAllAdmins().then((response) => {
			// 	setAdmins(response.data);
			// });
		}
	}, [managers]);

	//  Manager Register
	const registerManager = (values) => {
		// Validate

		setIsLoading(true);
		ManagerAPI.registerManager(values)
			.then((response) => {
				localStorage.setItem("uID", response.data._id);
				localStorage.setItem("email", response.data.email);
				localStorage.setItem("authToken", response.data.token);
				localStorage.setItem("permissionLevel", response.data.permissionLevel);
				makeToast({ type: "success", message: "Register Successful" });
				setIsLoggedIn(true);
				setIsLoading(false);
			})
			.catch((err) => {
				setMessage(err.response.data.details.message);
				setIsLoading(false);
				makeToast({ type: "error", message: "Invalid Email or Password" });
			});
	};

	return (
		<ManagerContext.Provider
			value={{
				isLoading,
				isLoggedIn,
				ManagerLogin,
				deleteManager,
				manager,
				managers,
				setManagers,
				setManager,
				updateManager,
				message,
				registerManager,
			}}
		>
			{children}
		</ManagerContext.Provider>
	);
}

export default ManagerContext;

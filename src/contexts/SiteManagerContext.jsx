import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SiteManagerAPI from "./api/SiteManagerAPI";

import Joi from "joi";

import { makeToast } from "../components";

const SiteManagerContext = createContext();

export function SiteManagerProvider({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const [siteManagers, setSiteManagers] = useState({
		uID: "",
		name: "",
		email: "",
		password: "",
		contact: "",
		nic: "",
	});

	// Get all Site managers
	const [siteManager, setSiteManager] = useState([]);

	// Login Form Validation
	const LoginFormSchema = Joi.object({
		email: Joi.string()
			.email({ tlds: { allow: false } })
			.message("Email should be valid"),
		password: Joi.string().min(3).message("Password should be valid"),
	});

	// Site Manager Login
	const siteManagerLogin = (values) => {
		setIsLoading(true);
		// Validate
		const { error } = LoginFormSchema.validate(values);
		if (error) {
			makeToast({ type: "error", message: error.details[0].message });
			return;
		}

		SiteManagerAPI.loginSiteManager(values)
			.then((response) => {
				localStorage.setItem("uID", response.data._id);
				localStorage.setItem("email", response.data.email);
				localStorage.setItem("authToken", response.data.token);
				localStorage.setItem("permissionLevel", response.data.permissionLevel);
				navigate("/site-manager");
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

	return (
		<SiteManagerContext.Provider
			value={{
				isLoading,
				isLoggedIn,
				siteManagerLogin,
			}}
		>
			{children}
		</SiteManagerContext.Provider>
	);
}

export default SiteManagerContext;

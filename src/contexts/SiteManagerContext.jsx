import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SiteManagerAPI from "./api/SiteManagerAPI";

import Joi from "joi";

import { makeToast } from "../components";

const SiteManagerContext = createContext();

export function SiteManagerProvider({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState(null);
	const navigate = useNavigate();

	const [siteManager, setSiteManager] = useState({
		uID: "",
		name: "",
		email: "",
		password: "",
		contact: "",
		nic: "",
	});

	// Get all Site managers
	const [siteManagers, setSiteManagers] = useState([]);

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

	// Delete Site Manager
	const deleteSiteManager = async (id) => {
		try {
			setIsLoading(true);
			await SiteManagerAPI.deleteSiteManager(id);
			setSiteManagers(siteManager.filter((siteManager) => siteManager._id !== id));
			makeToast({ type: "success", message: "Admin deleted successfully" });
			setIsLoading(false);
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	// Update Site Manager
	const updateSiteManager = (values) => {
		const uID = localStorage.getItem("uID");
		setIsLoading(true);
		SiteManagerAPI.updateSiteManager(uID, values)
			.then((response) => {
				setSiteManager(response.data);
				setIsLoading(false);
				makeToast({ type: "success", message: "Profile Updated Successfully" });
				navigate("/admin");
			})
			.catch((err) => {
				setMessage(err.response.data.details.message);
				setIsLoading(false);
			});
	};

	useEffect(() => {
		if (localStorage.getItem("uID")) {
			SiteManagerAPI.getSiteManagerDetails(localStorage.getItem("uID")).then((response) => {
				setSiteManager(response.data);
			});
			// AdminAPI.getAllAdmins().then((response) => {
			// 	setAdmins(response.data);
			// });
		}
	}, [siteManagers]);

	return (
		<SiteManagerContext.Provider
			value={{
				isLoading,
				isLoggedIn,
				siteManagerLogin,
				deleteSiteManager,
				siteManager,
				siteManagers,
				setSiteManagers,
				setSiteManager,
				updateSiteManager,
				message,
			}}
		>
			{children}
		</SiteManagerContext.Provider>
	);
}

export default SiteManagerContext;

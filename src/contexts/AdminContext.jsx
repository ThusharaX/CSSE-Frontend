import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminAPI from "./api/AdminAPI";

import Joi from "joi";

import { makeToast } from "../components";

const AdminContext = createContext();

export function AdminProvider({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState(null);

	const navigate = useNavigate();

	const [admin, setAdmin] = useState({
		uID: "",
		name: "",
		email: "",
		password: "",
		permissionLevel: "",
		createdAt: "",
		updatedAt: "",
	});

	// Get All Admins
	const [admins, setAdmins] = useState([]);

	// Login Form Validation
	const LoginFormSchema = Joi.object({
		email: Joi.string()
			.email({ tlds: { allow: false } })
			.message("Email should be valid"),
		password: Joi.string().min(4).message("Password should be valid"),
	});

	// Admin Login
	const login = (values) => {
		setIsLoading(true);
		// Validate
		const { error } = LoginFormSchema.validate(values);
		if (error) {
			makeToast({ type: "error", message: error.details[0].message });
			return;
		}

		AdminAPI.login(values)
			.then((response) => {
				localStorage.setItem("uID", response.data._id);
				localStorage.setItem("email", response.data.email);
				localStorage.setItem("authToken", response.data.token);
				localStorage.setItem("permissionLevel", response.data.permissionLevel);
				navigate("/admin");
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

	// Admin Logout
	const logout = () => {
		localStorage.removeItem("authToken");
		localStorage.removeItem("uID");
		localStorage.removeItem("adminname");
		localStorage.removeItem("permissionLevel");
		navigate("/admin/login");
		window.location.reload();
		makeToast({ type: "success", message: "Logout Successful" });
	};

	// Update Admin Profile
	const updateProfile = (values) => {
		const uID = localStorage.getItem("uID");
		setIsLoading(true);
		AdminAPI.updateProfile(uID, values)
			.then((response) => {
				setAdmin(response.data);
				setIsLoading(false);
				makeToast({ type: "success", message: "Profile Updated Successfully" });
				navigate("/admin");
			})
			.catch((err) => {
				setMessage(err.response.data.details.message);
				setIsLoading(false);
			});
	};

	// Delete Admin Account
	const deleteAdmin = async (id) => {
		try {
			setIsLoading(true);
			await AdminAPI.deleteAdmin(id);
			// Update the hotel owners state on removing hotel owner
			setAdmins(admins.filter((admin) => admin._id !== id));
			makeToast({ type: "success", message: "Admin deleted successfully" });
			setIsLoading(false);
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	useEffect(() => {
		if (localStorage.getItem("uID")) {
			AdminAPI.getAdminDetails(localStorage.getItem("uID")).then((response) => {
				setAdmin(response.data);
			});
			// AdminAPI.getAllAdmins().then((response) => {
			// 	setAdmins(response.data);
			// });
		}
	}, [admins]);

	// Admin Count
	const getAdminCount = () => {
		return admins.length;
	};

	return (
		<AdminContext.Provider
			value={{
				updateProfile,
				login,
				logout,
				isLoggedIn,
				isLoading,
				message,
				admin,
				admins,
				deleteAdmin,
				getAdminCount,
			}}
		>
			{children}
		</AdminContext.Provider>
	);
}

export default AdminContext;

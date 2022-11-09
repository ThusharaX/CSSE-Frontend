import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProcurementStaffAPI from "./api/ProcurementStaffAPI";

import Joi from "joi";

import { makeToast } from "../components";

const ProcurementStaffContext = createContext();

export function ProcurementStaffProvider({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState(null);
	const navigate = useNavigate();

	const [procurementStaff, setProcurementStaff] = useState({
		uID: "",
		name: "",
		email: "",
		password: "",
		contact: "",
		nic: "",
	});

	// Get all Procurement Staff
	const [procurementStaffs, setProcurementStaffs] = useState([]);

	// Login Form Validation
	const LoginFormSchema = Joi.object({
		email: Joi.string()
			.email({ tlds: { allow: false } })
			.message("Email should be valid"),
		password: Joi.string().min(3).message("Password should be valid"),
	});

	// Procurement Staff Login
	const login = (values) => {
		setIsLoading(true);
		// Validate
		const { error } = LoginFormSchema.validate(values);
		if (error) {
			makeToast({ type: "error", message: error.details[0].message });
			return;
		}

		ProcurementStaffAPI.login(values)
			.then((response) => {
				localStorage.setItem("uID", response.data._id);
				localStorage.setItem("email", response.data.email);
				localStorage.setItem("authToken", response.data.token);
				localStorage.setItem("permissionLevel", response.data.permissionLevel);
				navigate("/procurement-staff");
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

	// Delete Procurement Staff

	const deleteProcurementStaff = async (id) => {
		try {
			setIsLoading(true);
			await ProcurementStaffAPI.deleteProcurementStaff(id);
			setProcurementStaffs(procurementStaff.filter((procurementStaff) => procurementStaff._id !== id));
			makeToast({ type: "success", message: "Procurement Staff deleted successfully" });
			setIsLoading(false);
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	useEffect(() => {
		if (localStorage.getItem("uID")) {
			ProcurementStaffAPI.getProcurementStaffDetails(localStorage.getItem("uID")).then((response) => {
				setProcurementStaff(response.data);
			});
			// AdminAPI.getAllAdmins().then((response) => {
			// 	setAdmins(response.data);
			// });
		}
	}, [procurementStaffs]);

	// Update Procurement Staff
	const updateProcurementStaff = (values) => {
		const uID = localStorage.getItem("uID");
		setIsLoading(true);
		ProcurementStaffAPI.updateProcurementStaff(uID, values)
			.then((response) => {
				setProcurementStaff(response.data);
				setIsLoading(false);
				makeToast({ type: "success", message: "Profile Updated Successfully" });
				navigate("/procurement-staff");
			})
			.catch((err) => {
				setMessage(err.response.data.details.message);
				setIsLoading(false);
			});
	};

	return (
		<ProcurementStaffContext.Provider
			value={{
				isLoading,
				isLoggedIn,
				login,
				procurementStaffs,
				setProcurementStaffs,
				procurementStaff,
				setProcurementStaff,
				message,
				deleteProcurementStaff,
				updateProcurementStaff,
			}}
		>
			{children}
		</ProcurementStaffContext.Provider>
	);
}

export default ProcurementStaffContext;

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const CheckLoginStatus = () => {
	const permissionLevel = localStorage.getItem("permissionLevel");

	if (permissionLevel === "ADMIN") {
		return <Navigate to="/admin" />;
	}
	if (permissionLevel === "SITE_MANAGER") {
		return <Navigate to="/site-manager" />;
	}
	if (permissionLevel === "PROCUREMENT_STAFF") {
		return <Navigate to="/procurement-staff" />;
	} else {
		return <Outlet />;
	}

	// If the user is authenticated then redirect to the dashboard
	// Otherwise redirect to the login page
	// return !isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default CheckLoginStatus;

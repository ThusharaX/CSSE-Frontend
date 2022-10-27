import React from "react";
import AdminDashboard from "./AdminDashboard";

import { AdminProvider } from "../../contexts/AdminContext";

const Login = () => {
	return (
		<AdminProvider>
			<AdminDashboard />
		</AdminProvider>
	);
};

export default Login;

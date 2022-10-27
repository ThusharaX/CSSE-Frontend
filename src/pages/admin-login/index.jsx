import React from "react";
import AdminLogin from "./AdminLogin";

import { AdminProvider } from "../../contexts/AdminContext";

const Login = () => {
	return (
		<AdminProvider>
			<AdminLogin />
		</AdminProvider>
	);
};

export default Login;

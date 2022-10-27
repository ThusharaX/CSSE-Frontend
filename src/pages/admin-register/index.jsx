import React from "react";
import AdminRegister from "./AdminRegister";

import { AdminProvider } from "../../contexts/AdminContext";

const Login = () => {
	return (
		<AdminProvider>
			<AdminRegister />
		</AdminProvider>
	);
};

export default Login;

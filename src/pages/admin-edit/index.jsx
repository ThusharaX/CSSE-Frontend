import React from "react";
import AdminEdit from "./AdminEdit";

import { AdminProvider } from "../../contexts/AdminContext";

const Login = () => {
	return (
		<AdminProvider>
			<AdminEdit />
		</AdminProvider>
	);
};

export default Login;

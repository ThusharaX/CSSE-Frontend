import React from "react";
import AdminManageSample from "./AdminManageSample";

import { SampleProvider } from "../../contexts/SampleContext";

const Login = () => {
	return (
		<SampleProvider>
			<AdminManageSample />
		</SampleProvider>
	);
};

export default Login;

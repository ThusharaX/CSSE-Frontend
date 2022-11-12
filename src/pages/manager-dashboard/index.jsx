import React from "react";
import ManagerDashboard from "./ManagerDashboard";

import { ManagerProvider } from "../../contexts/ManagerContext";

const index = () => {
	return (
		<>
			<ManagerProvider>
				<ManagerDashboard />
			</ManagerProvider>
		</>
	);
};
export default index;

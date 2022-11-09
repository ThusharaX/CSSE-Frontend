import React from "react";
import ProcurementStaffDashboard from "./ProcurementStaffDashboard";

import { ProcurementStaffProvider } from "../../contexts/ProcurementStaffContext";

const index = () => {
	return (
		<ProcurementStaffProvider>
			<ProcurementStaffDashboard />
		</ProcurementStaffProvider>
	);
};

export default index;

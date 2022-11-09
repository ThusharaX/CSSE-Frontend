import React from "react";
import ProcurementStaffLogin from "./ProcurementStaffLogin";

import { ProcurementStaffProvider } from "../../contexts/ProcurementStaffContext";

const index = () => {
	return (
		<>
			<ProcurementStaffProvider>
				<ProcurementStaffLogin />
			</ProcurementStaffProvider>
		</>
	);
};

export default index;

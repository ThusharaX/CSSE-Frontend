import React from "react";
import ProcurementStaffRegister from "./ProcurementStaffRegister";

import { ProcurementStaffProvider } from "../../contexts/ProcurementStaffContext";

const index = () => {
	return (
		<>
			<ProcurementStaffProvider>
				<ProcurementStaffRegister />
			</ProcurementStaffProvider>
		</>
	);
};

export default index;

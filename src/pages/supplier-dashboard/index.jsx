import React from "react";
import SupplierDashboard from "./SupplierDashboard";

import { SupplierProvider } from "../../contexts/SupplierContext";

const index = () => {
	return (
		<>
			<SupplierProvider>
				<SupplierDashboard />
			</SupplierProvider>
		</>
	);
};

export default index;

import React from "react";
import SupplierLogin from "./SupplierLogin";

import { SupplierProvider } from "../../contexts/SupplierContext";

const index = () => {
	return (
		<>
			<SupplierProvider>
				<SupplierLogin />
			</SupplierProvider>
		</>
	);
};

export default index;

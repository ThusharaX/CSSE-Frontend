import React from "react";
import ManagerFurtherApproval from "./ManagerFurtherApproval";

import { ProductProvider } from "../../contexts/productContext";

import { OrderProvider } from "../../contexts/OrderContext";
const index = () => {
	return (
		<>
			<OrderProvider>
				<ManagerFurtherApproval />
			</OrderProvider>
		</>
	);
};

export default index;

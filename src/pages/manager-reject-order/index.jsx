import React from "react";
import ManagerRejectOrder from "./ManagerRejectOrder";

import { ProductProvider } from "../../contexts/productContext";

import { OrderProvider } from "../../contexts/OrderContext";
const index = () => {
	return (
		<>
			<OrderProvider>
				<ManagerRejectOrder />
			</OrderProvider>
		</>
	);
};

export default index;

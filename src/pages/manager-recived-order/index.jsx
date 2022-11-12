import React from "react";
import ManagerRecivedOrder from "./ManagerRecivedOrder";

import { ProductProvider } from "../../contexts/productContext";

import { OrderProvider } from "../../contexts/OrderContext";
const index = () => {
	return (
		<>
			<OrderProvider>
				<ManagerRecivedOrder />
			</OrderProvider>
		</>
	);
};

export default index;

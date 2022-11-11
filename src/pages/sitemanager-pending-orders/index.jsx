import React from "react";
import SiteManagerPendingOrders from "./SiteManagerPendingOrders";

// SampleProvider
import { ProductProvider } from "../../contexts/productContext";

import { OrderProvider } from "../../contexts/OrderContext";
const index = () => {
	return (
		<>
			<OrderProvider>
				<SiteManagerPendingOrders />
			</OrderProvider>
		</>
	);
};

export default index;

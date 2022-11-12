import React from "react";
import SiteManagerDeliveredOrders from "./SiteManagerDeliveredOrders";

// SampleProvider
import { ProductProvider } from "../../contexts/productContext";

import { OrderProvider } from "../../contexts/OrderContext";
const index = () => {
	return (
		<>
			<OrderProvider>
				<SiteManagerDeliveredOrders />
			</OrderProvider>
		</>
	);
};

export default index;

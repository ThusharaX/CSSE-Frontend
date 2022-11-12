import React from "react";
import SiteManagerReceivedOrders from "./SiteManagerReceivedOrders";

// SampleProvider
import { ProductProvider } from "../../contexts/productContext";

import { OrderProvider } from "../../contexts/OrderContext";
const index = () => {
	return (
		<>
			<OrderProvider>
				<SiteManagerReceivedOrders />
			</OrderProvider>
		</>
	);
};

export default index;

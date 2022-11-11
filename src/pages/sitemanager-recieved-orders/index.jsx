import React from "react";
import SiteManagerRecievedOrders from "./SiteManagerRecievedOrders";

// SampleProvider
import { ProductProvider } from "../../contexts/productContext";

import { OrderProvider } from "../../contexts/OrderContext";
const index = () => {
	return (
		<>
			<OrderProvider>
				<SiteManagerRecievedOrders />
			</OrderProvider>
		</>
	);
};

export default index;

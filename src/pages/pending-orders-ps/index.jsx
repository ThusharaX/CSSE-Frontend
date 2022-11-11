import React from "react";
import PendingOrdersPS from "./PendingOrdersPS";

// SampleProvider
import { ProductProvider } from "../../contexts/productContext";

import { OrderProvider } from "../../contexts/OrderContext";
const index = () => {
	return (
		<>
			<OrderProvider>
				<PendingOrdersPS />
			</OrderProvider>
		</>
	);
};

export default index;

import React from "react";
import AcceptedOrdersSP from "./AcceptedOrdersSP";

// SampleProvider
import { ProductProvider } from "../../contexts/productContext";

import { OrderProvider } from "../../contexts/OrderContext";
const index = () => {
	return (
		<>
			<OrderProvider>
				<AcceptedOrdersSP />
			</OrderProvider>
		</>
	);
};

export default index;

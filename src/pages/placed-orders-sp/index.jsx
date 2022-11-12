import React from "react";
import PlacedOrdersSP from "./PlacedOrdersSP";

// SampleProvider

import { OrderProvider } from "../../contexts/OrderContext";
const index = () => {
	return (
		<>
			<OrderProvider>
				<PlacedOrdersSP />
			</OrderProvider>
		</>
	);
};

export default index;
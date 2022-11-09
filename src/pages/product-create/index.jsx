import React from "react";
import ProductCreate from "./ProductCreate";

// SampleProvider
import { ProductProvider } from "../../contexts/productContext";

const index = () => {
	return (
		<>
			<ProductProvider>
				<ProductCreate />
			</ProductProvider>
		</>
	);
};

export default index;

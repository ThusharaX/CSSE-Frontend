import React from "react";
import SampleList from "./SampleCreate";

// SampleProvider
import { SampleProvider } from "../../contexts/SampleContext";

const index = () => {
	return (
		<>
			<SampleProvider>
				<SampleList />
			</SampleProvider>
		</>
	);
};

export default index;

import React from "react";
import SampleReport from "./SampleReport";

// SampleProvider
import { SampleProvider } from "../../contexts/SampleContext";

const index = () => {
	return (
		<>
			<SampleProvider>
				<SampleReport />
			</SampleProvider>
		</>
	);
};

export default index;

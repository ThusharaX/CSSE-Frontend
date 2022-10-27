import React from "react";
import Sample from "./Sample";

// SampleProvider
import { SampleProvider } from "../../contexts/SampleContext";

const index = () => {
	return (
		<>
			<SampleProvider>
				<Sample />
			</SampleProvider>
		</>
	);
};

export default index;

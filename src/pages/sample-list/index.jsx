import React from "react";
import SampleList from "./SampleList";

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

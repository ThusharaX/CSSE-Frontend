import React from "react";
import SampleEdit from "./SampleEdit";

// SampleProvider
import { SampleProvider } from "../../contexts/SampleContext";

const index = () => {
	return (
		<>
			<SampleProvider>
				<SampleEdit />
			</SampleProvider>
		</>
	);
};

export default index;

import React from "react";
import ManagerLogin from "./ManagerLogin";

import { ManagerProvider } from "../../contexts/ManagerContext";

const index = () => {
	return (
		<>
			<ManagerProvider>
				<ManagerLogin />
			</ManagerProvider>
		</>
	);
};
export default index;

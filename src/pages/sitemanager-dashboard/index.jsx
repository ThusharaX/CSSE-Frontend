import React from "react";
import SiteManagerDashboard from "./SiteManagerDashboard";

import { SiteManagerProvider } from "../../contexts/SiteManagerContext";

const index = () => {
	return (
		<>
			<SiteManagerProvider>
				<SiteManagerDashboard />
			</SiteManagerProvider>
		</>
	);
};
export default index;

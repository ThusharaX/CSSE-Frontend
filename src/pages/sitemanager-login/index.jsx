import React from "react";
import SiteManagerLogin from "./SiteManagerLogin";

import { SiteManagerProvider } from "../../contexts/SiteManagerContext";

const index = () => {
	return (
		<>
			<SiteManagerProvider>
				<SiteManagerLogin />
			</SiteManagerProvider>
		</>
	);
};

export default index;

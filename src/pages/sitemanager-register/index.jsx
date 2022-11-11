import React from "react";
import SiteManagerRegister from "./SiteManagerRegister";

import { SiteManagerProvider } from "../../contexts/SiteManagerContext";

const index = () => {
	return (
		<>
			<SiteManagerProvider>
				<SiteManagerRegister />
			</SiteManagerProvider>
		</>
	);
};

export default index;

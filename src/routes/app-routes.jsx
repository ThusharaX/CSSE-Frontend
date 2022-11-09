import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import CheckLoginStatus from "./CheckLoginStatus";

// Components
import Header from "../components/Header";

// Pages

import {
	// Common
	Home,
	WhoAreYou,

	// Admin
	AdminLogin,
	AdminRegister,
	AdminEdit,
	AdminDashboard,

	// Sample
	SampleList,
	SampleCreate,
	AdminManageSamples,
	SampleEdit,
	SampleReport,
	Sample,

	// Site Manager
	SiteManagerLogin,
	SiteManagerDashboard,

	// Procurement Staff
	ProcurementStaffLogin,
	ProcurementStaffDashboard,
} from "../pages";

const AppRoutes = () => {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					{/* Public Routes */}
					<Route path="/" element={<Home />} />
					<Route path="/who-are-you" element={<WhoAreYou />} />

					{/* Sample */}
					<Route exact path="/sample" element={<SampleList />} />
					<Route exact path="/sample/:id" element={<Sample />} />

					{/* Check Login Status */}
					<Route exact path="/admin/login" element={<CheckLoginStatus />}>
						<Route exact path="/admin/login" element={<AdminLogin />} />
					</Route>
					<Route exact path="/admin/register" element={<CheckLoginStatus />}>
						<Route exact path="/admin/register" element={<AdminRegister />} />
					</Route>

					{/* Admin Private Routes */}
					<Route exact path="/admin" element={<PrivateRoute permissionLevel="ADMIN" />}>
						<Route exact path="/admin" element={<AdminDashboard />} />
						<Route exact path="/admin/edit" element={<AdminEdit />} />
						<Route exact path="/admin/create-sample" element={<SampleCreate />} />
						<Route exact path="/admin/edit-sample/:id" element={<SampleEdit />} />
						<Route exact path="/admin/manage-samples" element={<AdminManageSamples />} />
						<Route exact path="/admin/report" element={<SampleReport />} />
					</Route>

					{/* Site Manager*/}

					{/* Check Login Status */}
					<Route exact path="/site-manager/login" element={<CheckLoginStatus />}>
						<Route exact path="/site-manager/login" element={<SiteManagerLogin />} />
					</Route>

					{/* Site Manager Private Routes */}
					<Route exact path="/site-manager" element={<PrivateRoute permissionLevel="SITE_MANAGER" />}>
						<Route exact path="/site-manager" element={<SiteManagerDashboard />} />
					</Route>

					{/* Procurement Staff*/}

					{/* Check Login Status */}
					<Route exact path="/procurement-staff/login" element={<CheckLoginStatus />}>
						<Route exact path="/procurement-staff/login" element={<ProcurementStaffLogin />} />
					</Route>

					{/* Procurement Staff Private Routes */}
					<Route exact path="/procurement-staff" element={<PrivateRoute permissionLevel="PROCUREMENT_STAFF" />}>
						<Route exact path="/procurement-staff" element={<ProcurementStaffDashboard />} />
					</Route>


					{/* 404 */}
					<Route path="*" element={<h1>404</h1>} />
				</Routes>
			</Router>
		</>
	);
};

export default AppRoutes;

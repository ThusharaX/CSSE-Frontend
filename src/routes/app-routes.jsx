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
	SiteManagerRegister,
	SiteManagerPendingOrders,
	SiteManagerDeliveredOrders,
	SiteManagerReceivedOrders,

	// Procurement Staff
	ProcurementStaffLogin,
	ProcurementStaffDashboard,
	ProcurementStaffRegister,

	//
	ProductCreate,
	// Supplier
	SupplierLogin,
	SupplierDashboard,

	//Pending Orders
	PendingOrdersPS,

	//placed orders
	PlacedOrdersSP,

	//Accepted Orders
	AcceptedOrdersSP,

	// Manager
	ManagerLogin,
	ManagerDashboard,
	ManagerFurtherApproval,
	ManagerRecivedOrder,
  
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
						<Route exact path="/site-manager/pending-orders" element={<SiteManagerPendingOrders />} />
						<Route exact path="/site-manager/delivered-orders" element={<SiteManagerDeliveredOrders />} />
						<Route exact path="/site-manager/recieved-orders" element={<SiteManagerReceivedOrders />} />
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

					{/* Products Private Routes */}
					<Route exact path="/procurement-staff/product-create" element={<ProductCreate />} />
					{/* Supplier*/}
					{/* Check Login Status */}
					<Route exact path="/supplier/login" element={<CheckLoginStatus />}>
						<Route exact path="/supplier/login" element={<SupplierLogin />} />
					</Route>

					{/* Supplier Private Routes */}
					<Route exact path="/supplier" element={<PrivateRoute permissionLevel="MANAGER" />}>
						<Route exact path="/supplier" element={<SupplierDashboard />} />
					</Route>

					{/* Pending Orders Private Routes */}
					<Route exact path="/pending-orders" element={<PendingOrdersPS />} />

					{/* Site Manager Register */}
					<Route path="/site-manager-register" element={<SiteManagerRegister />} />

					{/* Procurement Staff Register */}
					<Route path="/procurement-staff-register" element={<ProcurementStaffRegister />} />

					{/* Placed Orders routes */}
					<Route path="/placed-orders" element={<PlacedOrdersSP />} />

					{/* Placed Orders routes */}
					<Route path="/accepted-orders" element={<AcceptedOrdersSP />} />
					{/* Check Login Status */}
					<Route exact path="/manager/login" element={<CheckLoginStatus />}>
						<Route exact path="/manager/login" element={<ManagerLogin />} />
					</Route>

					{/* Manager private Routes*/}
					<Route exact path="/manager" element={<PrivateRoute permissionLevel="MANAGER" />}>
						<Route exact path="/manager" element={<ManagerDashboard />} />
						<Route exact path="/manager/further-approval" element={<ManagerFurtherApproval />} />
						<Route exact path="/manager/recevied-order" element={<ManagerRecivedOrder />} />
					</Route>

					{/* 404 */}
					<Route path="*" element={<h1>404</h1>} />
				</Routes>
			</Router>
		</>
	);
};

export default AppRoutes;

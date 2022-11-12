import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ManagerContext from "../../contexts/ManagerContext";

const ManagerDashboard = () => {
	const { manager } = useContext(ManagerContext);
	// eslint-disable-next-line no-console
	console.log(manager);
	return (
		<>
			<h1 className="mt-5 text-4xl text-center">Manager Dashboard</h1>

			<div className="flex justify-center flex-col sm:flex-row m-5">
				<div className="bg-white shadow-lg text-center flex justify-center flex-col rounded-3xl p-10 space-y-5 sm:w-1/2 sm:m-10">
					{/* <div>DP</div> */}
					<img src="/user.svg" alt="" className="w-32 h-32 mx-auto rounded-full aspect-square" />
					<div className="text-primary-blue font-bold text-3xl">{manager.name}</div>
					<div className="sm:mx-10 md:mx-20 flex border border-orange-400 justify-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
						{manager.permissionLevel}
					</div>
					<div>{manager.email}</div>
					{/* Edit profile button Redirects to AdminEdit page */}
					<Link to="/admin/edit">
						<button className="w-1/2 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline">
							Edit Profile
						</button>
					</Link>
				</div>

				<div className="flex flex-col sm:flex-wrap sm:flex-row justify-center">
					{/* Card 1 */}
					<Link to="/manager/further-approval">
						<div className="m-5 p-5 sm:p-10 md:p-20 bg-white drop-shadow-lg bg-no-repeat bg-left-bottom md:bg-[url('../addSample.png')] rounded-3xl">
							<h1 className="text-primary-blue md:text-white md:bg-black md:bg-opacity-60 md:p-2 rounded-xl font-bold text-lg md:text-3xl hover:underline">
								Orders Under Approval
							</h1>
						</div>
					</Link>

					{/* Card 1 */}
					<Link to="/manager/recevied-order">
						<div className="m-5 p-5 sm:p-10 md:p-20 bg-white drop-shadow-lg bg-no-repeat bg-left-top bg-cover md:bg-[url('../allSamples.png')] rounded-3xl">
							<h1 className="text-primary-blue md:text-white md:bg-black md:bg-opacity-60 md:p-2 rounded-xl font-bold text-lg md:text-3xl hover:underline">
								Recieved Orders
							</h1>
						</div>
					</Link>

					{/* Card 1 */}
					{/* <Link to="/admin/report">
						<div className="m-5 p-5 sm:p-10 md:p-20 bg-white drop-shadow-lg bg-no-repeat bg-left-top bg-cover md:bg-[url('../sampleReport.png')] rounded-3xl">
							<h1 className="text-primary-blue md:text-white md:bg-black md:bg-opacity-60 md:p-2 rounded-xl font-bold text-lg md:text-3xl hover:underline">
								Manage Supplier
							</h1>
						</div>
					</Link> */}
				</div>
			</div>
		</>
	);
};

export default ManagerDashboard;

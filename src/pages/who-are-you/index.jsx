import React from "react";
import { Link } from "react-router-dom";

const WhoAreYou = () => {
	// Admin
	return (
		<>
			<h1 className="mt-5 text-4xl text-center">Who are you</h1>

			{/* 4 cards for 4 types of users */}
			<div className="flex flex-wrap justify-center mt-10">
				{/* Admin */}
				<div className="w-1/4 m-2">
					<Link to="/admin">
						<div className="bg-white shadow-md rounded-lg p-4">
							<div className="flex flex-col items-center">
								<div className="w-20 h-20 rounded-full bg-gray-200 flex justify-center items-center">
									<img src="https://img.icons8.com/color-glass/64/000000/hotel-check-in.png" />
								</div>
								<h3 className="text-gray-700 font-medium text-lg mt-3">Admin</h3>
								<span className="text-sm text-gray-500">Manage our platform</span>
							</div>
						</div>
					</Link>
				</div>

				<div className="w-1/4 m-2">
					<Link to="/site-manager/login">
						<div className="bg-white shadow-md rounded-lg p-4">
							<div className="flex flex-col items-center">
								<div className="w-20 h-20 rounded-full bg-gray-200 flex justify-center items-center">
									<img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-tour-guide-travel-agency-flaticons-lineal-color-flat-icons-2.png" />
								</div>
								<h3 className="text-gray-700 font-medium text-lg mt-3">Site Manager</h3>
								<span className="text-sm text-gray-500">Manage our site</span>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};

export default WhoAreYou;

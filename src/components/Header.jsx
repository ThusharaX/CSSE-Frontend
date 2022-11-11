import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	const permissionLevel = localStorage.getItem("permissionLevel");

	const logout = () => {
		localStorage.removeItem("authToken");
		localStorage.removeItem("uID");
		localStorage.removeItem("username");
		localStorage.removeItem("ContactNumber");
		localStorage.removeItem("Email");
		localStorage.removeItem("permissionLevel");

		if (permissionLevel == "ADMIN") {
			window.location.href = "/admin";
		} else {
			window.location.href = "/";
		}
	};
	return (
		<>
			<div className="bg-primary-blue text-2xl">
				<div className="max-w-7xl mx-auto py-2 px-3 sm:px-6 lg:px-8">
					<div className="pr-16 sm:text-center sm:px-16">
						{/* Link to home page */}
						{/* <Link to="/">
							<h1 className="mt-2 mb-2 text-2xl font-bold text-white">Travel Planning System</h1>
						</Link> */}

						{/* Nav links */}
						<nav className="flex justify-between">
							<ul className="flex">
								{/* <li className="mr-6">
									<Link to="/about" className="text-base font-medium text-white hover:text-gray-300">
										About
									</Link>
								</li> */}
								<li className="mr-6">
									<Link to="/" className="text-base font-medium text-white hover:text-gray-300">
										<h1 className="mt-2 mb-2 text-2xl font-bold text-white">CSSE Frontend</h1>
									</Link>
								</li>
							</ul>

							{/* Admin */}
							<ul className="flex p-1">
								{permissionLevel === "SITE_MANAGER" ? (
									<li className="mr-6 bg-white hover:bg-gray-300 px-5 rounded-lg ">
										<Link to="/site-manager"
											className="text-base font-bold  text-primary-blue">
											Dashboard
										</Link>
									</li>
								) : (
									<p></p>
								)}

								{/* Sample */}
								{/* <li className="mr-6">
									<Link to="/sample" className="text-base font-medium text-white hover:text-gray-300">
										Samples
									</Link>
								</li> */}

								{localStorage.getItem("authToken") ? (
									<li className="mr-6 bg-white hover:bg-gray-300 px-5 rounded-lg " onClick={logout}>
										{/* <Link to="#" className="text-base font-bold  text-primary-blue">
											Logout
										</Link> */}
										<a href="#" className="text-base font-bold  text-primary-blue">
											Logout
										</a>
									</li>
								) : (
									<></>
								)}
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;

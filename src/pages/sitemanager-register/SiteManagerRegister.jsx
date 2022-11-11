import React, { useContext } from "react";
import SiteManagerContext from "../../contexts/SiteManagerContext";

const SiteManagerRegister = () => {
	const { registerSiteManager } = useContext(SiteManagerContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		const newSiteManager = {
			name: e.target.name.value,
			email: e.target.email.value,
			password: e.target.password.value,
			contact: e.target.contact.value,
			nic: e.target.nic.value,
		};
		registerSiteManager(newSiteManager);
	};

	return (
		<>
			<h1 className="mt-5 text-4xl text-center font-bold">Site Manager Register</h1>
			<div className="flex justify-center">
				<div className="border-t w-1/2 px-10 rounded-2xl mt-5 shadow-2xl bg-white">
					<form className="mt-5" onSubmit={handleSubmit}>
						{/* side by side */}
						<div className="flex flex-row space-x-4">
							<div className="mb-4 w-1/2">
								<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="title">
									Name
								</label>
								<input
									className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="name"
									type="text"
									placeholder="Enter User Name"
								/>
							</div>
							<div className="mb-4 w-1/2">
								<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="content">
									Email
								</label>
								<input
									className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Enter Email Address"
								/>
							</div>
						</div>

						<div className="flex flex-row space-x-4">
							<div className="mb-4 w-1/2">
								<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="title">
									Contact Number
								</label>
								<input
									className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="contact"
									type="number"
									placeholder="Enter Contact Number"
								/>
							</div>
							<div className="mb-4 w-1/2">
								<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="content">
									NIC
								</label>
								<input
									className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="nic"
									type="text"
									placeholder="Enter NIC Number"
								/>
							</div>
						</div>

						<div className="mb-4 w-1/2">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="content">
								Password
							</label>
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="password"
								type="password"
								placeholder="Enter Password"
							/>
						</div>

						<div className="mb-6 text-center">
							<button
								className="w-full px-4 py-2 font-bold text-white bg-primary-blue rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
								type="submit"
							>
								Register
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default SiteManagerRegister;

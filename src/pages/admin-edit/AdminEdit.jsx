import React, { useContext } from "react";

import AdminContext from "../../contexts/AdminContext";

const AdminEdit = () => {
	const { updateProfile, admin } = useContext(AdminContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		const newAdmin = {
			name: e.target.name.value,
			email: e.target.email.value,
			password: e.target.password.value,
		};

		updateProfile(newAdmin);
	};

	return (
		<>
			<h1 className="mt-5 text-4xl text-center">Admin Edit</h1>

			<div className="flex justify-center">
				<div className="w-1/2">
					<form className="mt-5" onSubmit={handleSubmit}>
						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
								Admin Name
							</label>
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="name"
								type="text"
								placeholder="Admin Name"
								defaultValue={admin.name}
							/>
						</div>
						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
								Email
							</label>
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="email"
								type="email"
								placeholder="Email"
								defaultValue={admin.email}
							/>
						</div>
						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
								Password
							</label>
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="password"
								type="password"
								placeholder="Password"
								defaultValue={admin.password}
							/>
						</div>
						<div className="mb-6 text-center">
							<button
								className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
								type="submit"
							>
								Update
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default AdminEdit;

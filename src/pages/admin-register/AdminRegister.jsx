import React, { useContext } from "react";

import AdminContext from "../../contexts/AdminContext";

const AdminRegister = () => {
	const { register } = useContext(AdminContext);

	// const initialValues = {
	// 	name: "Admin",
	// 	email: "admin@gmail.com",
	// 	password: "pass",
	// 	confirmPassword: "pass",
	// };

	const handleSubmit = (e) => {
		e.preventDefault();

		const newAdmin = {
			name: e.target.name.value,
			email: e.target.email.value,
			password: e.target.password.value,
		};

		register(newAdmin);
	};

	return (
		<>
			<h1 className="mt-5 text-4xl text-center">Admin Register</h1>

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
							/>
						</div>

						<div className="mb-6 text-center">
							<button
								className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
								type="submit"
							>
								Register
							</button>
						</div>
						<hr className="mb-6 border-t" />
						<div className="text-center">
							<a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="/admin/login">
								Already have an account? Login!
							</a>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default AdminRegister;

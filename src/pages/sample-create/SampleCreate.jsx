import React, { useContext } from "react";
import SampleContext from "../../contexts/SampleContext";

const SampleCreate = () => {
	const { addSample } = useContext(SampleContext);

	// const initialValues = {
	// 	title: "",
	// 	content: "",
	// 	admin_id: "",
	// };

	const handleSubmit = (e) => {
		e.preventDefault();

		const newSample = {
			title: e.target.title.value,
			content: e.target.content.value,
			admin_id: localStorage.getItem("uID"),
		};
		addSample(newSample);
	};

	return (
		<>
			<h1 className="mt-5 text-4xl text-center font-bold">Add Sample</h1>

			<div className="flex justify-center">
				<div className="border-t w-1/2 px-10 rounded-2xl mt-5 shadow-2xl bg-white">
					<form className="mt-5" onSubmit={handleSubmit}>
						{/* side by side */}
						<div className="flex flex-row space-x-4">
							<div className="mb-4 w-1/2">
								<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="title">
									Title
								</label>
								<input
									className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="title"
									type="text"
									placeholder="Title"
								/>
							</div>
							<div className="mb-4 w-1/2">
								<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="content">
									Content
								</label>
								<input
									className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="content"
									type="text"
									placeholder="Content"
								/>
							</div>
						</div>

						<div className="mb-6 text-center">
							<button
								className="w-full px-4 py-2 font-bold text-white bg-primary-blue rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
								type="submit"
							>
								ADD
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default SampleCreate;

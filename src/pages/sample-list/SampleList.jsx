import React, { useContext, useState } from "react";
import SampleContext from "../../contexts/SampleContext";
import { Link } from "react-router-dom";

const SampleList = () => {
	const { isLoading, samples, searchSample, getSamples, setSamples } = useContext(SampleContext);

	const [search, setSearch] = useState("");

	// const handleSearch = () => {
	// 	searchSample(search);
	// };

	// Onchange live search in samples
	const handleSearch = (e) => {
		if (e.target.value !== "") {
			setSearch(e.target.value);
			searchSample(e.target.value);
		} else {
			getSamples();
		}
	};

	return (
		<>
			{/* Add Sample Button */}
			<div className="flex justify-between">
				<h1 className="mt-5 text-3xl text-left ml-10 font-bold text-primary-blue">
					{search ? `Search Results for "${search}"` : "Samples"}
				</h1>

				<div className="mr-10">
					{/* when button clicked, redirect to create page */}
					{localStorage.getItem("permissionLevel") === "HOTEL_OWNER" && (
						<Link to="/admin/create-sample">
							<button className="bg-primary-blue text-white font-bold py-2 px-4 rounded-full mt-5">+ Add Sample</button>
						</Link>
					)}
				</div>
			</div>

			<div className="flex justify-center">
				<div className="w-3/4 px-10 rounded-2xl mt-5 shadow-2xl border-t">
					{/* Search bar */}
					<div className="flex space-x-5 justify-center">
						<div className="w-3/4 mt-5">
							<input
								type="text"
								className="w-full px-5 py-3 text-gray-700 bg-white rounded-lg shadow-md focus:outline-none focus:shadow-outline border-t"
								placeholder="Search"
								onChange={(e) => {
									setSearch(e.target.value);
									handleSearch(e);
								}}
							/>
						</div>

						<div className="w-1/4 mt-5">
							<button
								type="button"
								className="w-full px-5 py-3 text-white bg-primary-blue rounded-lg shadow-md hover:bg-primary-blue-dark focus:outline-none focus:shadow-outline"
								onClick={handleSearch}
							>
								Search
							</button>
						</div>
					</div>

					{isLoading ? (
						<h1 className="text-center">Loading...</h1>
					) : (
						// <div className="flex flex-wrap justify-center">
						<div className="flex space-x-5 justify-center">
							{samples.map((sample) => (
								<div key={sample._id} className="w-1/3 m-5 p-5 border border-gray-300 rounded-lg bg-white">
									{/* side by side */}
									<div className="flex justify-between">
										<Link to={`/sample/${sample._id}`}>
											<h1 className="text-2xl hover:underline">{sample.title}</h1>
										</Link>
										<h1 className="text-xl">{sample.content}</h1>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default SampleList;

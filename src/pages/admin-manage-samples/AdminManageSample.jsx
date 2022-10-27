import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SampleContext from "../../contexts/SampleContext";
import makeToast from "../../components/toast";

const AdminManageSample = () => {
	const { samplesByAdminID, deleteSample, getSampleByAdminID, isLoading } = useContext(SampleContext);

	const refreshData = () => {
		makeToast({
			type: "promise",
			myPromise: getSampleByAdminID(localStorage.getItem("uID")),
			successMessage: "Data Refreshed",
			errorMessage: "Error when refreshing data",
			loadingMessage: "Refreshing data...",
		});
	};

	return (
		<>
			<h1 className="mt-5 text-4xl text-center">My Samples</h1>

			{/* Refresh button */}
			<div className="flex justify-end mx-5">
				<Link to="/admin/manage-samples">
					<button
						onClick={refreshData}
						disabled={isLoading}
						className={
							isLoading
								? "cursor-not-allowed flex items-center justify-center px-4 py-2 mt-5 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
								: "cursor-pointer flex items-center justify-center px-4 py-2 mt-5 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
						}
					>
						Refresh
					</button>
				</Link>
			</div>

			{/* Sample Table */}
			<div className="flex flex-col mt-5 mx-5">
				<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
							<table className="min-w-full divide-y divide-gray-200">
								<thead className="bg-gray-50">
									<tr>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											title
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											content
										</th>
										{/* Update and Delete icon */}
										<th scope="col" className="relative px-6 py-3">
											<span className="sr-only">Edit</span>
										</th>

										<th scope="col" className="relative px-6 py-3">
											<span className="sr-only">Delete</span>
										</th>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200">
									{samplesByAdminID.map((sample) => (
										<tr key={sample._id}>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="flex items-center">
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900">{sample.title}</div>
													</div>
												</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900">{sample.content}</div>
											</td>
											{/* Update and Delete icon */}
											<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
												<Link to={`/admin/edit-sample/${sample._id}`} className="text-indigo-600 hover:text-indigo-900">
													Edit
												</Link>
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
												<p
													href="#"
													className="text-indigo-600 hover:text-indigo-900 cursor-pointer"
													onClick={() => deleteSample(sample._id)}
												>
													Delete
												</p>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AdminManageSample;

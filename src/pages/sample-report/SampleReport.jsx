import React, { useContext, useEffect, useState } from "react";
import SampleContext from "../../contexts/SampleContext";

const SampleReport = () => {
	const { samplesByAdminID } = useContext(SampleContext);

	const [totalSamples, setTotalSamples] = useState(0);

	// Calculate total hotel samples
	useEffect(() => {
		if (samplesByAdminID) {
			setTotalSamples(samplesByAdminID.length);
		}
	}, [samplesByAdminID]);

	// Print report
	const printReport = () => {
		window.print();
	};

	return (
		<>
			{/* Print report tailwind button */}
			<div className="flex justify-end m-5">
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={printReport}>
					Print Report
				</button>
			</div>

			<div id="report-content">
				<h1 className="mt-5 text-4xl text-center">My Samples Report</h1>

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
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>

				{/* Display hotel samples count */}
				<div className="flex justify-center">
					<div className="flex flex-col justify-center items-center bg-white w-1/2 p-10 shadow-lg rounded-lg mt-10">
						<h1 className="ml-10 text-2xl text-gray-900">Samples Count: {totalSamples}</h1>
					</div>
				</div>
			</div>
		</>
	);
};

export default SampleReport;

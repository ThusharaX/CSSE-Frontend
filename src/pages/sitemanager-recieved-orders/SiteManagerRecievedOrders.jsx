import React, { useContext, useState } from "react";
import OrderContext from "../../contexts/OrderContext";
import { useNavigate, Link } from "react-router-dom";

//import ProductContext from "../../contexts/productContext";
import makeToast from "../../components/toast";

const SiteManagerRecievedOrders = () => {
	//const { getOneProduct } = useContext(ProductContext);
	const { editOrderStatus, getOneOrder, orders, setOrder } = useContext(OrderContext);
	const [status, setStatus] = useState(null);
	const [orderStatus, setOrderStatus] = useState("");

	const refresh = () => {
		const navigate = useNavigate();
		navigate("/pending-orders");
	};

	/*const oneProduct = (id) => {
		const productDetails = getOneProduct(id);
		const ProductName = productDetails.productName;
		return ProductName;
	};*/

	const handleSubmit = (e) => {
		e.preventDefault();

		// eslint-disable-next-line no-console
		console.log("id=" + status);

		const newStatus = {
			id: status,
			status: e.target.status.value,
		};

		editOrderStatus(newStatus);

		// Refresh the page
		window.location.reload();
	};

	return (
		<>
			<h1 className="mt-5 text-4xl text-center">Received Orders</h1>

			{/* Pending orders Table */}
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
											required date
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											company
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											agreedPrice
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											quantity
										</th>
										{/* Total price */}
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Total price
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											description
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											address
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											product
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											status
										</th>
									</tr>
								</thead>

								{orders
									.filter((elem) => elem.status == "RECEIVED")
									.map((order) => (
										<tbody className="text-sm divide-y divide-gray-100" key={order._id}>
											<tr>
												<td className="p-2 whitespace-nowrap">
													<div className="text-left">{order.requiredDate.substring(0, 10)}</div>
												</td>
												<td className="p-2 whitespace-nowrap">
													<div className="text-left">{order.company}</div>
												</td>
												<td className="p-2 whitespace-nowrap">
													<div className="text-left font-semibold">{order.agreedPrice}</div>
												</td>
												<td className="p-2 whitespace-nowrap">
													<div className="text-left font-semibold">{order.quantity}</div>
												</td>
												{/* Total price */}
												<td className="p-2 whitespace-nowrap">
													<div className="text-left font-semibold">Rs.{order.agreedPrice * order.quantity}/=</div>
												</td>
												<td className="p-2 whitespace-nowrap">
													<div className="text-left font-semibold">{order.description}</div>
												</td>
												<td className="p-2 whitespace-nowrap">
													<div className="text-left font-semibold">{order.address}</div>
												</td>
												<td className="p-2 whitespace-nowrap">
													<div className="text-left font-semibold">{order.productName}</div>
												</td>
												<td className="p-2 whitespace-nowrap">
													{status === order._id ? (
														<div>
															<form onSubmit={handleSubmit}>
																{/* eslint-disable-next-line no-console */}
																{console.log(status)}
																<select name="status" id="status" defaultValue={order.status}>
																	<option value={order.status}>{order.status}</option>
																	<option value="PENDING">PENDING</option>
																</select>
																<div>
																	<button className="bg-green-500 p-1 rounded-sm text-white" type="submit" value="Submit">
																		change Status
																	</button>
																</div>
															</form>
														</div>
													) : (
														<div>
															<div>{order.status}</div>
															<button className="bg-red-500 p-1 rounded-sm text-white" onClick={() => setStatus(order._id)}>
																change
															</button>
														</div>
													)}
												</td>
											</tr>
										</tbody>
									))}
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SiteManagerRecievedOrders;

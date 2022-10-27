/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useEffect, useState } from "react";
import SampleContext from "../../contexts/SampleContext";

const Sample = () => {
	const { isLoading, getSampleByID, sample } = useContext(SampleContext);

	const sampleId = window.location.pathname.split("/")[2];

	useEffect(() => {
		getSampleByID(sampleId);
	}, []);

	return (
		<div>
			{isLoading ? (
				<h1 className="text-center">Loading...</h1>
			) : (
				<div className="flex space-x-5 justify-center">
					<div className="w-1/2 m-5 p-5 border border-gray-300 rounded-lg bg-white">
						<div className="flex justify-between">
							<h1 className="text-2xl">{sample.title}</h1>
							<h1 className="text-2xl">{sample.content}</h1>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Sample;

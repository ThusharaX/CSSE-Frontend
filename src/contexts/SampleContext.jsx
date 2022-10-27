import { createContext, useState, useEffect } from "react";
import SampleAPI from "./api/SampleAPI";
import makeToast from "../components/toast";
import { useNavigate } from "react-router-dom";

import Joi from "joi";

const SampleContext = createContext();

export function SampleProvider({ children }) {
	const [isLoading, setIsLoading] = useState(false);
	const [samples, setSamples] = useState([]);
	// Hotel samples for the current hotel owner
	const [samplesByAdminID, setSamplesByAdminID] = useState([]);

	const navigate = useNavigate();

	// Sample
	const [sample, setSample] = useState({
		id: "",
		title: "",
		content: "",
		admin_id: "",
	});

	useEffect(() => {
		setIsLoading(true);
		SampleAPI.getSamples().then((response) => {
			setSamples(response.data);
			setIsLoading(false);
		});
		SampleAPI.getSampleByAdminId(localStorage.getItem("uID")).then((response) => {
			setSamplesByAdminID(response.data);
			setIsLoading(false);
		});
	}, []);

	// Get all samples
	const getSamples = async () => {
		try {
			setIsLoading(true);
			const response = await SampleAPI.getSamples();
			setSamples(response.data);
			setIsLoading(false);
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	// Add Sample validation schema
	const AddSampleFormSchema = Joi.object({
		title: Joi.string().required().min(3).max(50).label("Name"),
		content: Joi.string().required().min(3).max(300).label("Content"),
		admin_id: Joi.string().required().min(3).max(50).label("Admin ID"),
	});

	// Add Sample
	const addSample = async (newSample) => {
		// Validate the new sample
		const { validationError } = AddSampleFormSchema.validate(newSample);
		if (validationError) {
			makeToast({ type: "error", message: validationError.details[0].message });
			return;
		}
		try {
			setIsLoading(true);
			const response = await SampleAPI.createSample(newSample);
			setSamples([...samples, response.data]);
			setIsLoading(false);
			navigate("/admin/manage-samples");
			makeToast({ type: "success", message: "Sample Added Successfully" });
		} catch (addSampleError) {
			// eslint-disable-next-line no-console
			console.log(addSampleError);
		}
	};

	// Get Sample by admin_id
	const getSampleByAdminID = async (admin_id) => {
		try {
			setIsLoading(true);
			const response = await SampleAPI.getSampleByAdminId(admin_id);
			setSamplesByAdminID(response.data);
			setIsLoading(false);
		} catch (getSampleByAdminIDError) {
			// eslint-disable-next-line no-console
			console.log(getSampleByAdminIDError);
		}
	};

	// Delete Sample
	const deleteSample = async (id) => {
		try {
			setIsLoading(true);
			await SampleAPI.deleteSample(id);
			// Update the samples state
			setSamplesByAdminID(samplesByAdminID.filter((hotelPack) => hotelPack._id !== id));
			makeToast({ type: "success", message: "Sample deleted successfully" });
			setIsLoading(false);
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	// Update Sample
	const updateSample = async (values) => {
		const sampleID = values.id;
		// eslint-disable-next-line no-console
		console.log("sampleID");
		setIsLoading(true);
		SampleAPI.editSample(sampleID, values)
			.then((response) => {
				setSamplesByAdminID(
					samplesByAdminID.map((sampleByID) => {
						if (sampleByID._id === sampleID) {
							return response.data;
						}
						return sampleByID;
					})
				);
				setIsLoading(false);
				makeToast({ type: "success", message: "Sample updated successfully" });
				navigate("/admin/manage-samples");
			})
			.catch((err) => {
				// eslint-disable-next-line no-console
				console.log(err);
				setIsLoading(false);
			});
	};

	// Get Sample by ID
	const getSampleByID = async (id) => {
		try {
			setIsLoading(true);
			const response = await SampleAPI.getSampleById(id);
			setSample(response.data);
			setIsLoading(false);
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	// Search Sample
	const searchSample = async (searchTerm) => {
		try {
			setIsLoading(true);
			const response = await SampleAPI.searchSample(searchTerm);
			setSamples(response.data);
			setIsLoading(false);
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	return (
		<SampleContext.Provider
			value={{
				isLoading,
				samples,
				addSample,
				sample,
				getSampleByAdminID,
				deleteSample,
				samplesByAdminID,
				setSamplesByAdminID,
				updateSample,
				getSampleByID,
				searchSample,
				getSamples,
				setSamples,
			}}
		>
			{children}
		</SampleContext.Provider>
	);
}

export default SampleContext;

import { Link } from "react-router-dom";
import { Filter } from "../components/filter";
import { JobCard } from "../components/jobCard";
import jobsData from "../library/data.json";
import { useState } from "react";

export default function Homepage() {
	const [filteredJob, setFilteredJob] = useState({
		keyword: "",
		location: "",
		fullTime: false,
	});

	// Function to split jobs into chunks of 3

	function splitJobs(jobs, numOfSplits) {
		const chunkOfJobs = [];

		for (let i = 0; i < jobs.length; i += numOfSplits) {
			chunkOfJobs.push(jobs.slice(i, i + numOfSplits));
		}
		return chunkOfJobs;
	}

	const filteredJobs = jobsData.filter((job) => {
		const matchesKeyword = job.position
			.toLowerCase()
			.includes(filteredJob.keyword.toLowerCase());

		const matchesLocation = job.location
			.toLowerCase()
			.includes(filteredJob.location.toLowerCase());

		const matchesFullTime = filteredJob.fullTime
			? job.contract.toLowerCase() === "full time"
			: true;

		return matchesKeyword && matchesLocation && matchesFullTime;
	});

	const filteredAndSplittedJobs = splitJobs(filteredJobs, 3);

	return (
		<>
			<Filter
				filteredJob={filteredJob}
				setFilteredJob={setFilteredJob}
			/>
			<div className="max-w-[1110px] mx-auto px-2 mt-24 flex flex-col gap-16 ">
				{filteredAndSplittedJobs.map((job, i) => (
					<div
						key={i}
						className="grid grid-cols-3">
						{job.map((individualJob) => (
							<Link
								className="max-w-[350px] flex-1 h-full flex "
								to={`job/${individualJob.id}`}
								key={individualJob.id}>
								<JobCard {...individualJob} />
							</Link>
						))}
					</div>
				))}

				<div></div>
			</div>
		</>
	);
}

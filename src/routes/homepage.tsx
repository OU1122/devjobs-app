import { Link } from "react-router-dom";
import { Filter } from "../components/filter";
import { JobCard } from "../components/jobCard";
import jobsData from "../library/data.json";

export default function Homepage() {
	// Function to split jobs into chunks of 3

	function splitJobs(jobs, numOfSplits) {
		const chunkOfJobs = [];

		for (let i = 0; i < jobs.length; i += numOfSplits) {
			chunkOfJobs.push(jobs.slice(i, i + numOfSplits));
		}
		return chunkOfJobs;
	}

	const splittedJobs = splitJobs(jobsData, 3);

	return (
		<>
			<Filter />
			<div className="max-w-[1110px] mx-auto px-2 mt-24 flex flex-col gap-16">
				{splittedJobs.map((job, i) => (
					<div
						key={i}
						className="flex flex-row justify-between">
						{job.map((individualJob) => (
							<Link
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

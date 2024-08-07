import { Filter } from "../components/filter";
import { JobCard } from "../components/jobCard";

export default function Homepage() {
	return (
		<>
			<Filter />
			<div className="max-w-[1110px] mx-auto px-2 mt-24 flex flex-col gap-16">
				<div className="flex flex-row justify-between">
					<JobCard />
					<JobCard />
					<JobCard />
				</div>
				<div className="flex flex-row justify-between">
					<JobCard />
					<JobCard />
					<JobCard />
				</div>
			</div>
		</>
	);
}

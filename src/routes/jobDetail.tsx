import { useParams } from "react-router-dom";
import { JobDetailProps } from "../library/types";
import { Button } from "../components/button";

export default function JobDetail({ jobs }: JobDetailProps) {
	const { jobId } = useParams();

	const job = jobs.find((job) => job.id === parseInt(jobId));
	console.log(job);
	return (
		<>
			<main className="max-w-[1440px] mx-auto px-2 flex flex-col gap-16">
				<div className="max-w-[730px] mx-auto flex flex-row w-full">
					<div
						className="h-[174px] w-[174px] flex items-center justify-center rounded-bl-lg"
						style={{ backgroundColor: job.logoBackground }}>
						<img
							src={job.logo}
							className="w-[81px]"
						/>
					</div>
					<div className="flex items-center justify-between grow px-8 bg-White rounded-tr-lg rounded-br-lg">
						<div>
							<h2 className="text-2xl font-bold mb-2">{job.company}</h2>
							<a
								className=" text-DarkGray text-base"
								href={job.website}>
								{job.website}
							</a>
						</div>
						<div>
							<Button type="button">Visit Website</Button>
						</div>
					</div>
				</div>
				<div className="max-w-[730px] mx-auto bg-White flex w-full rounded-lg py-11 px-10">
					<div className="">
						<div className="flex justify-between items-center">
							<div className="flex flex-col gap-1">
								<div className="text-DarkGray text-base flex gap-2">
									<p>{job.postedAt}</p> <span className="px-2">●</span>
									<p>{job.contract}</p>
								</div>
								<div>
									<h2 className="font-bold text-[28px] text-VeryDarkBlue tracking-wide">
										{job.position}
									</h2>
								</div>
								<div>
									<p className="font-bold text-Violet text-sm">
										{job.location}
									</p>
								</div>
							</div>
							<Button type="button">Apply Now</Button>
						</div>
						<div className="mt-8 text-DarkGray">
							<p className="leading-relaxed">{job.description}</p>
						</div>
						<div className="leading-relaxed">
							<h2 className="font-bold text-xl mt-8 mb-4">
								Requirements
							</h2>
							<p className="text-DarkGray mb-4">
								{job.requirements.content}
							</p>

							{job.requirements.items.map((item, i) => (
								<li
									className="text-DarkGray mb-2"
									key={i}>
									{item}
								</li>
							))}
						</div>
						<div></div>
					</div>
				</div>

				<div className="w-full"></div>
			</main>
		</>
	);
}

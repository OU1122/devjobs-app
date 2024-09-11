import { useParams } from "react-router-dom";
import { JobDetailProps } from "../library/types";
import { Button } from "../components/button";

export default function JobDetail({ jobs }: JobDetailProps) {
	const { jobId } = useParams();

	const job = jobs.find((job) => job.id === parseInt(jobId!));

	if (!job) {
		return <div>No jobs found</div>;
	}

	return (
		<>
			<main className="max-w-[1440px] mx-auto px-4 flex flex-col gap-16 pb-12">
				<div className="max-w-[730px] mx-auto flex lg:flex-row flex-col items-center w-full bg-White rounded-md">
					<div
						className="lg:h-[174px] lg:w-[174px] h-[50px] w-[50px] -translate-y-6 lg:translate-y-0 flex items-center justify-center rounded-bl-lg"
						style={{ backgroundColor: job.logoBackground }}>
						<img
							src={job.logo}
							className="w-[81px]"
						/>
					</div>
					<div className="flex items-center justify-between flex-col lg:flex-row grow px-8 pb-4 gap-4 lg:gap-0 bg-White dark:bg-VeryDarkBlue rounded-tr-lg rounded-br-lg">
						<div className="flex items-center justify-center flex-col lg:items-start">
							<h2 className="text-2xl font-bold mb-2 dark:text-White">
								{job.company}
							</h2>
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
				<div className="max-w-[730px] mx-auto bg-White dark:bg-VeryDarkBlue flex w-full rounded-lg py-11 lg:px-10 px-4">
					<div className="">
						<div className="flex justify-between items-center flex-col lg:flex-row gap-4 lg:gap-0">
							<div className="flex flex-col gap-2 lg:gap-1">
								<div className="text-DarkGray text-base flex gap-2">
									<p>{job.postedAt}</p> <span className="px-2">●</span>
									<p>{job.contract}</p>
								</div>
								<div>
									<h2 className="font-bold lg:text-[28px] text-xl text-VeryDarkBlue dark:text-White tracking-wide">
										{job.position}
									</h2>
								</div>
								<div>
									<p className="font-bold text-Violet text-sm">
										{job.location}
									</p>
								</div>
							</div>

							<Button
								width="w-full"
								type="button"
								link={job.apply}>
								Apply Now
							</Button>
						</div>
						<div className="mt-8 text-DarkGray">
							<p className="leading-relaxed">{job.description}</p>
						</div>
						<div className="leading-relaxed">
							<h2 className="font-bold text-xl mt-8 mb-4 dark:text-LightGray">
								Requirements
							</h2>
							<p className="text-DarkGray  mb-4">
								{job.requirements.content}
							</p>
							<ul className="list-disc">
								{job.requirements.items &&
									job.requirements.items.map((item, i) => (
										<li
											className="grid grid-cols-[auto_1fr] gap-8 text-DarkGray mb-2"
											key={i}>
											<span>⦿</span>
											<span className="block">{item}</span>
										</li>
									))}
							</ul>
						</div>
						<div className="leading-relaxed">
							<h2 className="font-bold text-xl mt-8 mb-4 dark:text-LightGray">
								What Will You Do
							</h2>
							<p className="text-DarkGray mb-4">{job.role.content}</p>
							<ol className="list-decimal">
								{job.role.items &&
									job.role.items.map((item, i) => (
										<li
											className="grid grid-cols-[auto_1fr] gap-8 text-DarkGray mb-2"
											key={i}>
											<span className="text-Violet font-bold">
												{i + 1}.
											</span>
											<span className="block">{item}</span>
										</li>
									))}
							</ol>
						</div>
					</div>
				</div>

				<div className="w-full bg-White dark:bg-VeryDarkBlue flex justify-center rounded-md shadow-sm">
					<div className="max-w-[730px] flex items-center justify-center lg:justify-between w-full py-5">
						<div className="hidden lg:block">
							<div className="">
								<h2 className="text-xl font-bold mb-2 dark:text-White">
									{job.position}
								</h2>
								<h3 className="text-[16px] text-DarkGray">
									{job.company}
								</h3>
							</div>
						</div>
						<div>
							<Button
								type="button"
								link={job.apply}>
								Apply Now
							</Button>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

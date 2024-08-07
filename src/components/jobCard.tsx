import logo from "../assets/logos/blogr.svg";
type JobCardProps = {
	test: string;
};

const mockData = [
	{
		logo: logo,
		logoBackground: "hsl(36, 87%, 49%)",
		title: "Mega Senior Software Engineer",
		company: "Tech Company",
		country: "United States",
		jobType: "Full-time",
		added: "2 days ago",
	},
];

export const JobCard: React.FC<JobCardProps> = () => {
	return (
		<div className="wrapper max-w-[350px] flex-1 h-full flex">
			<div className="relative bg-White  rounded-2xl p-8 shadow-sm flex-1">
				<div
					style={{ backgroundColor: mockData[0].logoBackground }}
					className="absolute top-0 left-8 -translate-y-7 w-[50px] h-[50px] rounded-lg flex items-center justify-center">
					<div className="w-[35px] h-[35px] a">
						<img
							src={mockData[0].logo}
							className="w-full h-full object-contain"></img>
					</div>
				</div>
				<div className="flex flex-col gap-8 justify-between">
					<div className="flex flex-col gap-2 pt-4">
						<div className="text-DarkGray flex tracking-wide">
							<p>{mockData[0].added}</p>
							<span className="px-2">●</span>
							<p>{mockData[0].jobType}</p>
						</div>
						<div>
							<h2 className="font-bold text-xl text-VeryDarkBlue tracking-wide">
								{mockData[0].title}
							</h2>
						</div>
						<div>
							<p className="text-DarkGray">{mockData[0].company}</p>
						</div>
					</div>
					<div>
						<p className="text-Violet font-semibold text-sm">
							{mockData[0].country}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

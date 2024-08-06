type JobCardProps = {
	test: string;
};

const mockData = [
	{
		logo: "https://example.com/logo.png",
		title: "Software Engineer",
		company: "Tech Company",
		country: "USA",
		jobType: "Full-time",
		added: "2 days ago",
	},
];

export const JobCard: React.FC<JobCardProps> = ({ test }) => {
	return (
		<div className="wrapper">
			{test}
			<div>
				<div className="w-[50px] h-[50px]">
					<img className="w-full h-full object-cover">
						{mockData[0].logo}
					</img>
				</div>
				<div>
					<div className="text-DarkGray">
						<p>{mockData[0].added}</p>
						<p>{mockData[0].jobType}</p>
					</div>
					<div>
						<h2 className="font-bold text-xl">{mockData[0].title}</h2>
					</div>
					<div>
						v<p>{mockData[0].company}</p>:
					</div>
				</div>
			</div>
		</div>
	);
};

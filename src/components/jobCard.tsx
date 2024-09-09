import { BasicJobCardProps } from "../library/types";

export const JobCard: React.FC<BasicJobCardProps> = ({
	company,
	logo,
	logoBackground,
	position,
	postedAt,
	contract,
	location,
	...otherProps
}) => {
	return (
		<div className="wrapper max-w-[350px] flex-1 h-full flex ">
			<div className="relative bg-White dark:bg-VeryDarkBlue  rounded-2xl p-8 shadow-sm flex-1 hover:cursor-pointer">
				<div
					style={{ backgroundColor: logoBackground }}
					className="absolute top-0 left-8 -translate-y-7 w-[50px] h-[50px] rounded-lg flex items-center justify-center">
					<div className="w-[35px] h-[35px] a">
						<img
							src={logo}
							className="w-full h-full object-contain"></img>
					</div>
				</div>
				<div className="flex flex-col gap-8 justify-between">
					<div className="flex flex-col gap-2 pt-4">
						<div className="text-DarkGray flex tracking-wide">
							<p>{postedAt}</p>
							<span className="px-2">●</span>
							<p>{contract}</p>
						</div>
						<div>
							<h2 className="font-bold text-xl text-VeryDarkBlue dark:text-White tracking-wide">
								{position}
							</h2>
						</div>
						<div>
							<p className="text-DarkGray">{company}</p>
						</div>
					</div>

					<div>
						<p className="text-Violet font-semibold text-sm">
							{location}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

import { Button } from "./button";
import search from "../assets/desktop/icon-search.svg";
import location from "../assets/desktop/icon-location.svg";

type FilterProps = {
	filteredJob: {
		keyword: string;
		location: string;
		fullTime: boolean;
	};
	setFilteredJob: React.Dispatch<React.SetStateAction<string>>;
};
export const Filter: React.FC<FilterProps> = ({
	filteredJob,
	setFilteredJob,
}) => {
	const handleChange = (e) => {
		const { name, type, value, checked } = e.target;
		setFilteredJob((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};
	console.log(filteredJob);
	return (
		<div className="max-w-[1110px] mx-auto px-2 flex items-center bg-White rounded-md shadow-md">
			<div className="px-4 py-4 w-[40%] border-r-[1px] border-Gray">
				<form className="flex items-center gap-2">
					<span>
						<img src={search}></img>
					</span>
					<input
						className="w-full leading-10 px-2"
						value={filteredJob.keyword}
						onChange={handleChange}
						name="keyword"
						type="text"
						placeholder="Filter by title, companies, expertise..."
					/>
				</form>
			</div>
			<div className="w-[30%] px-4 py-4 border-r-[1px] border-Gray">
				<form className="flex items-center gap-2">
					<span>
						<img src={location}></img>
					</span>
					<input
						type="text"
						name="location"
						value={filteredJob.location}
						onChange={handleChange}
						placeholder="Filter by location..."
						className="w-full leading-10 px-2"
					/>
				</form>
			</div>
			<div className="w-[30%]">
				<div className="flex items-center justify-around">
					<div className="flex items-center">
						<input
							id="checked-checkbox"
							type="checkbox"
							name="fullTime"
							checked={filteredJob.fullTime}
							onChange={handleChange}
							className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
						<label
							htmlFor="checked-checkbox"
							className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
							Full Time Only
						</label>
					</div>
					<Button type="button">Search</Button>
				</div>
			</div>
		</div>
	);
};

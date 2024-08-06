import bgHeader from "../assets/desktop/bg-pattern-header.svg";
import logo from "../assets/desktop/logo.svg";
import light from "../assets/desktop/icon-sun.svg";
import dark from "../assets/desktop/icon-moon.svg";
export const Header = () => {
	return (
		<div className="max-w-[1440px] mx-auto relative">
			<div className="absolute -z-10">
				<img
					src={bgHeader}
					className="w-full h-full min-h-[136px] md:min-h-[162px] object-cover"></img>
			</div>

			<div className="max-w-[1100px] mx-auto py-12 flex justify-between items-center">
				<div>
					<img src={logo}></img>
				</div>
				<div className="toggle flex items-center justify-center gap-5">
					<div>
						<img
							src={light}
							className="h-7 w-7"
						/>
					</div>
					<label className="inline-flex items-center cursor-pointer">
						<input
							type="checkbox"
							value=""
							className="sr-only peer"
						/>
						<div className="relative w-11 h-6 bg-White peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-White  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-White after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-LightViolet  after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-Gray peer-checked:bg-LightViolet peer-checked:after:bg-White"></div>
					</label>
					<div>
						<img
							src={dark}
							className="h-6 w-6"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

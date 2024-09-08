import bgHeader from "../assets/desktop/bg-pattern-header.svg";
import logo from "../assets/desktop/logo.svg";
import light from "../assets/desktop/icon-sun.svg";
import dark from "../assets/desktop/icon-moon.svg";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../library/themeContext";

export const Header = () => {
	const themeContext = useContext(ThemeContext);
	if (!themeContext) {
		throw new Error("ThemeContext must be used within a ThemeProvider");
	}
	const { theme, setTheme } = themeContext;

	const handleChange = (e) => {
		const checked = e.target.checked;
		setTheme(checked ? "dark" : "light");
	};

	useEffect(() => {
		const root = document.documentElement;
		if (theme === "dark") {
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}
	}, [theme]);

	return (
		<div className="max-w-[1440px] mx-auto relative">
			<div className="absolute -z-10">
				<img
					src={bgHeader}
					className="w-full h-full min-h-[136px] md:min-h-[162px] object-cover"></img>
			</div>

			<div className="max-w-[1100px] mx-auto py-12 px-4 flex justify-between items-center">
				<div>
					<Link to="/">
						<img src={logo}></img>
					</Link>
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
							name="lightModeToggle"
							className="sr-only peer"
							onChange={handleChange}
							checked={theme === "dark"}
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

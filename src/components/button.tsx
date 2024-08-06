import { Link } from "react-router-dom";

type ButtonProps = {
	type: "button" | "submit";
	children: React.ReactNode;
	link?: string;
	width?: "w-full";
	theme?: "dark" | "light";
};

export const Button: React.FC<ButtonProps> = ({
	type,
	link,
	children,
	width,
	theme,
}) => {
	if (link) {
		return (
			<div className="min-w-fit">
				<Link to={link}>
					<button
						className="text-White font-semibold bg-Violet rounded-lg px-6 py-2 hover:bg-LightViolet tracking-wide"
						type={type}>
						{children}
					</button>
				</Link>
			</div>
		);
	}

	if (width) {
		return (
			<div className={width}>
				<button
					className={`text-White font-semibold bg-Violet rounded-lg px-6 py-2 hover:bg-LightViolet tracking-wide ${width}`}
					type={type}>
					{children}
				</button>
			</div>
		);
	}

	if (theme == "dark") {
		return (
			<div className="dark min-w-fit">
				<button
					className={`text-White font-semibold bg-[#303642] rounded-lg px-6 py-2 hover:bg-[#696E76] tracking-wide ${width}`}
					type={type}>
					{children}
				</button>
			</div>
		);
	}

	return (
		<div className="min-w-fit">
			<button
				className="text-White font-semibold bg-Violet rounded-lg px-6 py-2 hover:bg-LightViolet tracking-wide"
				type={type}>
				{children}
			</button>
		</div>
	);
};

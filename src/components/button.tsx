import { Link } from "react-router-dom";

type ButtonProps = {
	type: "button" | "submit";
	children: React.ReactNode;
	link?: string;
	width?: "w-full";
};

export const Button: React.FC<ButtonProps> = ({
	type,
	link,
	children,
	width,
}) => {
	if (link) {
		return (
			<div className="min-w-fit">
				<Link to={link}>
					<button
						className="text-White bg-Violet rounded-lg px-6 py-2 hover:opacity-85"
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
					className={`text-White bg-Violet rounded-lg px-6 py-2 hover:opacity-85 ${width}`}
					type={type}>
					{children}
				</button>
			</div>
		);
	}

	return (
		<div className="min-w-fit">
			<button
				className="text-White bg-Violet rounded-lg px-6 py-2 hover:opacity-85"
				type={type}>
				{children}
			</button>
		</div>
	);
};

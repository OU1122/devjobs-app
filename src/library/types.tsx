export interface JobDetailProps {
	id: number;
	company: string;
	logo: string;
	logoBackground: string;
	position: string;
	postedAt: string;
	contract: string;
	location: string;
	website: string;
	apply: string;
	description: string;
	requirements: {
		content: string;
		items: string[];
	};
	role: {
		content: string;
		items: string[];
	};
}

export interface BasicJobCardProps
	extends Pick<
		JobDetailProps,
		| "id"
		| "company"
		| "logo"
		| "logoBackground"
		| "position"
		| "postedAt"
		| "contract"
		| "location"
	> {}

import Homepage from "./routes/homepage";
import JobDetail from "./routes/jobDetail";
import { Layout } from "./routes/layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import jobData from "./library/data.json";
import { useState } from "react";

import { ThemeContext } from "./library/themeContext";

function App() {
	const [theme, setTheme] = useState("light");

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					index: true,
					element: <Homepage />,
				},
				{
					path: "job/:jobId",
					element: <JobDetail jobs={jobData} />,
				},
			],
		},
	]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<RouterProvider router={router} />
		</ThemeContext.Provider>
	);
}

export default App;

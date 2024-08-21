import Homepage from "./routes/homepage";
import JobDetail from "./routes/jobDetail";
import { Layout } from "./routes/layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import jobData from "./library/data.json";

function App() {
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

	return <RouterProvider router={router} />;
}

export default App;

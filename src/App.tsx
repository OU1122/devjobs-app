import Homepage from "./routes/homepage";
import JobDetail from "./routes/jobDetail";
import { Layout } from "./routes/layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
					element: <JobDetail />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;

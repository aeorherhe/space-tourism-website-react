// external libraries
import { createBrowserRouter } from "react-router-dom";

// pages
import { Home, Crew, Destination, Technology, ErrorPage } from "../pages";
import PageLayout from "../components/ui/PageLayout";

// create a router
const router = createBrowserRouter([
  {
    element: <PageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/crew",
        element: <Crew />,
      },
      {
        path: "/destination",
        element: <Destination />,
      },
      {
        path: "/technology",
        element: <Technology />,
      },
    ],
  },
]);

export default router;

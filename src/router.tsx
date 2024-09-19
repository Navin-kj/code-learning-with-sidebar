import { AutoCounter } from "./Code/AutoIncrement";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import AutoInputFiles from "./Code/AutoInputFiles";
import Layout from "./Components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/autoCounter",
        element: <AutoCounter />,
      },
      {
        path: "/autoInput",
        element: <AutoInputFiles />,
      },
      {
        path: "/autoCounter",
        element: <AutoCounter />,
      },
      {
        path: "/autoCounter",
        element: <AutoCounter />,
      },
      {
        path: "/autoCounter",
        element: <AutoCounter />,
      },
      {
        path: "/autoCounter",
        element: <AutoCounter />,
      },
    ],
  },
]);

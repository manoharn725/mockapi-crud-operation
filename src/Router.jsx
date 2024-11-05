import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import StudentForm from "./pages/StudentForm";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/create-form",
          element: <StudentForm />,
        },
        {
            path: "/create-form/id",
            element: <StudentForm />,
          },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;

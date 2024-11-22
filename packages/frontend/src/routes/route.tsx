import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/sign-in";
import Welcome from "../pages/welcome";

export const router = createBrowserRouter([
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/welcome",
    element: <Welcome />,
  },
]);

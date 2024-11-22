import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { UserProvider } from "./context/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </UserProvider>
  );
}

export default App;

import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import "react-photo-view/dist/react-photo-view.css";
import AuthProvider from "./contexts/AuthProvider";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </AuthProvider>
  );
}

export default App;

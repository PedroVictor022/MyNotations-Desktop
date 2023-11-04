import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import URLBar from "./components/ui/url-bar/index.tsx";
import Home from "./pages/Home/index.tsx";
import Sidebar from "./components/ui/sidebar/index.tsx";
import Update from "./pages/Updates/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <URLBar />
        <App />
      </>
    ),
  },
  {
    path: "home",
    element: (
      <>
        <URLBar />
        <Home />
      </>
    ),
    children: [
      {
        path: "update",
        element: <App/>,
        
      }
    ]
  },
  {
    path: "updates",
    element: (
      <>
        <URLBar />
        <Update />
      </>
    ),
    
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={router} />
    {/* <BrowserRouter>
      <URLBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />}  />
        <Route path="/updates" element={<Update />} />
      </Routes>
    </BrowserRouter> */}
  </>
);

// Remove Preload scripts loading
postMessage({ payload: "removeLoading" }, "*");

// Use contextBridge
window.ipcRenderer.on("main-process-message", (_event, message) => {
  console.log(message);
});

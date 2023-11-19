import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import {
  BrowserRouter,
  Route,
  // RouterProvider,
  Routes,
} from "react-router-dom";
import URLBar from "./components/ui/url-bar/index.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <URLBar />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </>
);

// Remove Preload scripts loading
postMessage({ payload: "removeLoading" }, "*");

// Use contextBridge
window.ipcRenderer.on("main-process-message", (_event, message) => {
  console.log(message);
});

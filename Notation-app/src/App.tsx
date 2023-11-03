import { useState } from "react";

import LoadingScreenComponent from "./components/ui/LoadingSpinner/LoadingScreen";
import URLBar from "./components/ui/url-bar";
import Login from "./pages/Login";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <div >
      {isLoading ? (
        <LoadingScreenComponent />
      ) : (
        <div className="bg-zinc-900 w-full h-screen flex items-center justify-center flex-col">
          <URLBar />
          <Login />
        </div>
      )}
    </div>
  );
}

export default App;

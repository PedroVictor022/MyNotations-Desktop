import { useState } from "react";

import LoadingScreenComponent from "./components/ui/LoadingSpinner/LoadingScreen";
import Home from "./pages/Home";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <div className="bg-zinc-900 w-full h-screen">
      {isLoading ? (
        <LoadingScreenComponent />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;

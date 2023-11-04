import { useState } from "react";
import LoadingScreenComponent from "./components/ui/LoadingSpinner/LoadingScreen";
import Login from "./pages/Login";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <div className="h-screen flex flex-col">
      {isLoading ? (
        <LoadingScreenComponent />
      ) : (
        <div className="bg-zinc-900 flex-1 flex flex-col">
          {/* <URLBar /> */}
          <div className="flex-1 flex items-center justify-center">
            <Login />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

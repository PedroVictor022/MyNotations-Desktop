import "./App.css";
import { useState } from "react";
import LoadingScreenComponent from "./components/ui/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (<>
    {
      isLoading ? <LoadingScreenComponent/> : <div>
        Welcome to NotationApp
      </div>
    }
  </>);
}

export default App;

import { useState } from "react";
import Login from "./pages/Login";

function App() {
  return (
    <div className="h-screen min-w-[300px] flex flex-col">
      <div className="bg-zinc-900 flex-1 flex flex-col">
        {/* <URLBar /> */}
        <div className="flex-1 flex items-center justify-center">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default App;

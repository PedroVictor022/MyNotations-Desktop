// import { useEffect, useState } from "react";
import Editor from "./components/ui/editor";
import { GoogleIntegration } from "./components/ui/google-integration";
import News from "./components/ui/news/news";

function App() {
  return (
    <div className="bg-zinc-900 w-full h-screen pt-12 min-w-[300px] flex flex-col items-center overflow-x-hidden">
      {/* NOTICIAS */}
      <div className="max-h-[430px] max-w-[440px] w-[440px] overflow-y-auto pt-4">
        <News />
      </div>

      {/* GRADE DE CONTEUDO */}
      <div>
        
      </div>

      {/* EDITOR DE TEXTO + PAGINAS */}
      <div  className="max-h-[430px] max-w-[440px] w-[440px] overflow-y-auto">
        
      </div>

      {/* GOOGLE INTEGRATION */}
      <div>
        <GoogleIntegration />
      </div>
    </div>
  );
}

export default App;

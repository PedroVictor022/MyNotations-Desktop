// import { useEffect, useState } from "react";
import Editor from "./components/ui/editor";
import { GoogleIntegration } from "./components/ui/google-integration";

function App() {
  // const [matter, setMatter] = useState([]);
  // const requestBack = async () => {
  //   const request = await fetch("http://localhost:3333/matter", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await request.json();
  //   console.log(data);
  //   setMatter(data);
  // };

  // useEffect(() => {
  //   requestBack();
  // }, []);

  return (
    <div className="bg-zinc-900 w-full h-screen pt-12 min-w-[300px] flex flex-col items-center">
      {/* GRADE DE CONTEUDO */}
      <div>
        
      </div>
      

      {/* EDITOR DE TEXTO + PAGINAS */}
      <div  className="max-h-[430px] max-w-[440px] w-[440px] overflow-y-auto">
        <Editor />
      </div>

      {/* GOOGLE INTEGRATION */}
      <div>
        <GoogleIntegration />
      </div>
    </div>
  );
}

export default App;

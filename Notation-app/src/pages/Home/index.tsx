import { useState, useEffect } from "react";
import Editor from "../../components/ui/editor";


export default function Home() {
  const [matter, setMatter] = useState([]);

  const requestBack = async () => {
    const request = await fetch("http://localhost:3333/matter", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await request.json();
    console.log(data);
    setMatter(data);
  };

  useEffect(() => {
    requestBack();
  }, []);

  return (
    <div className="bg-zinc-900 h-screen pt-12">

       {/* <div>
         <h2>Materias</h2>
         <div>
            {
               matter.map((item) => (
                  <p key={item.id}>{item.name}</p>
               ))
            }
         </div>
      </div> */}
      {/* SECTION DE NOTAS */}
      <div className="w-full pt-10">
        <Editor />
      </div>
      {/* INTEGRACAO DE PESQUISA COM O GOOGLE */}
      <div></div>
    </div>
  );
}

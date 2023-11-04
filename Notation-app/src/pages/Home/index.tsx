import { useEffect, useState } from "react";
import URLBar from "../../components/ui/url-bar";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/ui/side-bar";

interface MatterProps {
  id: string;
  name: string;
  weight: number;
}

export default function Home() {
  // const [matter, setMatter] = useState([]);
  const navigate = useNavigate();

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
    <div className="bg-zinc-900 h-screen pt-12 w-full flex items-start justify-between text-white">
      <Sidebar />
      <div className="w-full h-full p-2">
        
      </div>
    </div>
  );
}

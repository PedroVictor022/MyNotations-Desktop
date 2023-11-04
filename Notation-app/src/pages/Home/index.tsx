import { useEffect, useState } from "react";
import Sidebar from "../../components/ui/sidebar";
import URLBar from "../../components/ui/url-bar";
import { useNavigate } from "react-router-dom";

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
    <div className="bg-zinc-900 w-full h-screen flex flex-col items-center justify-center">
      <p className="text-gray-200">Menu</p>
      <button onClick={() => navigate("/updates")}>Updates</button>
      <button onClick={() => navigate("update")}>Updates children</button>
    </div>
  );
}

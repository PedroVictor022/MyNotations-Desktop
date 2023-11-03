import { useEffect, useState } from "react";

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
    <div className="bg-zinc-900 w-full h-screen flex items-center justify-center">
      <p className="text-3xl font-bold">
        {matter.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        ))}
      </p>
    </div>
  );
}

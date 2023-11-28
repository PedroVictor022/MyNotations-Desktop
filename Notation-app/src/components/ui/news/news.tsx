import axios from "axios"
import { useEffect, useState } from "react"

export default function News() {
  const [dataNews, setDataNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const requestBack = async () => {
    const request = await fetch("http://localhost:3333/news", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
    const data = await request.json();
    console.log(data);
    setDataNews(data);
  }

  useEffect(() => {
    if(dataNews.length == 0) {
      requestBack();
    }
    return;
  }, [isLoading])


   return (
      <div className="w-full bg-zinc-800 p-2 rounded-lg flex flex-col items-start">
      <h1 className="text-white text-2xl ">Noticias</h1>
      {dataNews.map((item) => (
        <div>
          {item}
        </div>
      ))}
    </div>
   )
}
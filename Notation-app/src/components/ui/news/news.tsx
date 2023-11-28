import axios from "axios"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface NewsProps {
  news: string | any
}

export default function News() {
  const [dataNews, setDataNews] = useState<NewsProps[]>([]);
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
      <div className="w-full bg-zinc-800  p-2 rounded-lg flex flex-col items-start gap-2 text-base ">
      <h1 className="text-white text-3xl ">Noticias</h1>
      {dataNews.map((item) => (
        <motion.div 
          className="text-white text-sm w-full overflow-x-hidden"
          initial={{
            y: -100,
          }}
          animate={{
            y: 0
          }}
        >
          <p>
            {item}
          </p>
        </motion.div>
      ))}
      <p className="underline-offset-1 underline text-blue-500">
        <a href="https://folha.qconcursos.com" target="_blank">Abrir no site</a>
      </p>
    </div>
   )
}
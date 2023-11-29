import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface NewsProps {
  news: string | any;
}



export default function News() {
  const [dataNews, setDataNews] = useState<NewsProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); 
  

  const requestBack = async () => {
    try {

      const request = await fetch("http://localhost:3333/news", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!request.ok) {
        // Se a resposta não for bem-sucedida, lançar um erro
        throw new Error(`Erro na requisição: ${request.status}`);
      }

      const data = await request.json();
      setDataNews(data);
    } catch (error) {
      // Captura e trata erros da requisição
      setError("Não foi possível recuperar os dados do backend. Por favor, tente novamente mais tarde.");
      console.error(error);
    }
  };

  useEffect(() => {
    if (dataNews.length === 0) {
      requestBack();
    }
    return;
  }, [isLoading]);

  return (
    <div className="w-full bg-zinc-800 p-2 rounded-lg flex flex-col items-start gap-2 text-base ">
      <h1 className="text-white text-3xl">Noticias</h1>
      {error ? (
        <div>
          <span className="text-red-500">{error}</span>
        </div>
      ) : dataNews.length === 0 ? (
        <div>
          <span className="text-white">Erro ao carregar noticias!</span>
        </div>
      ) : (
        dataNews.map((item, index) => (
          <motion.div
            key={index}
            className="text-white text-sm w-full overflow-x-hidden"
            initial={{
              y: -100,
            }}
            animate={{
              y: 0,
            }}
          >
            <p>{item}</p>
          </motion.div>
        ))
      )}
      <p className="underline-offset-1 underline text-blue-500">
        <a href="https://folha.qconcursos.com" target="_blank" rel="noopener noreferrer">
          Abrir no site
        </a>
      </p>
    </div>
  );
}

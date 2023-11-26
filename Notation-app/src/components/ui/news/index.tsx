import { useState, useEffect } from "react";

interface NewsProps {
   text: string | ReactNode | null;
}

export default function News() {
   const [news, setNews] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const requestBack = async () => {
      const request = await fetch("http://localhost:3333/news", {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
      });
      const data = await request.json();
      console.log(data);
      setNews(data);
   };

   useEffect(() => {
      if(news.length == 0) {
         requestBack();
      }
      return;
   }, [isLoading]);

   return (
      <div>
         {news}
      </div>
   )
}
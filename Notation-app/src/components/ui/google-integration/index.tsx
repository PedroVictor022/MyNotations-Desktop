import { useState, useEffect } from "react"

export function GoogleIntegration() {
   const [search, setSearch] = useState<string>("");

   if (search.length <= 0) {
      return;
   }

   return (
      <div className="bg-zinc-950/30 w-full">
         <form
            className="flex gap-6 mt-4"
         >
            <span className="p-2 text-white font-semibold">Google Integration</span>
            <div className="flex">
               <input type="text" onChange={(e) => setSearch(e.target.value)} className="rounded-lg" />
               <button type="button" className="text-red-600 ">Ir</button>
            </div>
         </form>

         <div>
            {search}
         </div>
      </div>
   )
}
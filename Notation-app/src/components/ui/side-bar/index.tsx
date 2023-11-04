import {
  IoMdSettings,
  IoIosArchive,
  IoIosAnalytics,
  IoIosBookmark,
  IoIosBrowsers,
  IoIosMusicalNotes,
  IoIosCloudDownload
} from "react-icons/io";

import { motion } from "framer-motion";

export default function Sidebar() {
  const options = [
    {
      id: 6,
      name: "Configuracao",
      icon: <IoMdSettings />,
    },
    {
      id: 1,
      name: "Notas",
      icon: <IoIosArchive />,
    },
    {
      id: 2,
      name: "Editor de Texto",
      icon: <IoIosBookmark />,
    },
    {
      id: 3,
      name: "Cardernos",
      icon: <IoIosBrowsers />,
    },
    {
      id: 4,
      name: "Spotify",
      icon: <IoIosMusicalNotes />,
    },
    {
      id: 5,
      name: "Uso de CPU",
      icon: <IoIosAnalytics />,
    },
    {
      id: 7,
      name: "PDF",
      icon: <IoIosCloudDownload/>
    }
  ];

  return (
    <motion.div
      className="bg-zinc-800/80 w-44 h-full shadow-gray-700 rounded-sm"
      animate={{
        x: 0,
        
      }}
      initial={{
        x: -1000,
      }}
      transition={{
         duration: 1.2
      }}
      
    >
      {options.map((item) => (
        <div key={item.id} className="p-2">
          <p className="text-base flex gap-2 text-gray-400 items-center hover:cursor-pointer hover:text-gray-50 transition-all duration-200">
            {item.icon}
            {item.name}
          </p>
        </div>
      ))}
    </motion.div>
  );
}

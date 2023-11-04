export default function Sidebar() {
  const menuOptions = [
    {
      id: 1,
      option: "Perfil",
      command: "",
    },
    {
      id: 2,
      option: "Configs",
      command: "",
    },
    {
      id: 3,
      option: "Notas",
      command: "",
    },
    {
      id: 4,
      option: "Cadernos",
      command: "",
    },
    {
      id: 5,
      option: "Uso de CPU",
      command: "",
    },
    {
      id: 6,
      option: "Spotify",
      command: "",
    },
    {
      id: 7,
      option: "Editor de texto",
      command: "",
    },
  ];

  return (
    <div
      className="pt-16"
    >
      <div className="border-[1px] p-2 rounded-lg flex flex-col gap-4">
        {menuOptions.map((item) => (
          <div key={item.id} className="flex flex-col p-2 text-white">
            <p>{item.option}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

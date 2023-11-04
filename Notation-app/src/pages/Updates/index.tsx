import { useNavigate } from "react-router-dom"

export default function Update() {
   const navigate = useNavigate();

   return (
      <div>
         <h1>Updates for MyNotionApp</h1>
         <p>Building...</p>
         <button onClick={() => navigate("/home")}>Return to Home</button>
      </div>
   )
}
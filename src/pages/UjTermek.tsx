import { useState, type FormEvent } from "react"
import { useNavigate } from "react-router";

function UjTermek() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  function handleSubmit(e: FormEvent<HTMLFormElement>){
    e.preventDefault();
    alert(`A megadott termék: ${title}`);
    navigate("/admin");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Termék neve:</label>
        <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
        <button type="submit">Mentés</button>
      </form>
    </div>
  )
}

export default UjTermek
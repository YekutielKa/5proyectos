import { useState } from "react"

function TodoApp() {
  const [title, setTitle] = useState("Hola");
  function handleClick(e){
    e.preventDefault();
    setTitle('Yekutiel')
  }
  function handleChange(e){
    const value = e.target.value;
    setTitle(value);
  }

  return (
    <div className="todoContainer">
      <form className="todoCreateForm">
        <input onChange={handleChange} className="todoInput" value={title}/>
        <input onClick={handleClick} className="todoButtonCreate" type="submit" value="Create todo" />
       
      </form>
    </div>
  )
}
export default TodoApp
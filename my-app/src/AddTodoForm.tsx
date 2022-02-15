import React, { ChangeEvent, FormEvent, useState } from "react";
import "./AddTodoForm.css";

interface AddTodoFormProps {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({addTodo}) =>{
    const [newTodo, setNewTodo] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo("");
    }

    return( 
        <form className="form">
       <input className="input" type="text" value={newTodo} onChange={handleChange} />
       <button className="button" type="submit" onClick={handleSubmit}>Agregar Tarea</button>
    </form>
    );
}
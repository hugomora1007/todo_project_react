import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    const onCancel = () => {
        setOpenModal(false);
    }
    const onSubmit = (event) => {
        event.preventDefault(); // Cuando el formulario se envie, cuando demos clic al boton
        // con type=submit, no se va a recargar la pagina o tratar de enviar los datos a alguna parte
        // sino que cancelamos eso y en el resto del codigo se llama a mas logica
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Agrega tu nuevo TODO</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Aqui el texto del boton"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    className="TodoForm-button TodoForm-button-cancel"
                    type="button"
                    onClick={onCancel}>
                    Cancelar
                </button>
                <button
                    className="TodoForm-button TodoForm-button-add"
                    type="submit">
                    Añadir TODO
                </button>
            </div>
        </form>
    );
}

export { TodoForm };
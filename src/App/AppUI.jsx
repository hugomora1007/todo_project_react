import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButtom } from '../CreateTodoButtom';
import { Modal } from '../Modal';
import { TodoForm } from "../TodoForm";

function AppUI() {
    const {
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />      

            <TodoSearch />            

            <TodoList>
                {error && <p className="TodoList">Hubo un error.</p>}
                {loading && <p className="TodoList">Estamos cargando...</p>}
                {(!loading && !searchedTodos.length) && <p className="TodoList">Crea tu primer TODO</p>}

                {searchedTodos.map(todo => (
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                />
                ))}
            </TodoList>

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButtom 
                setOpenModal={setOpenModal}
            />
                
        </React.Fragment>        
    );
}

export { AppUI };
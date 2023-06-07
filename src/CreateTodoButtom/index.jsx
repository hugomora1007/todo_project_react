import react from "react";
import './CreateTodoButton.css';

function CreateTodoButtom(props){
const onClickButton = (msg) => {
    props.setOpenModal(prevState => !prevState);
}

    return(
        <button 
            className="CreateTodoButton"
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export { CreateTodoButtom };
import React from 'react';

const TodoForm = ({handleSubmit, handleChanges}) => {

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='newTask' placeholder='Tasks' onChange={handleChanges}/>
            <div>
                <button type='submit'>Add Todo</button>
            </div>
        </form>
    );
};

export default TodoForm;
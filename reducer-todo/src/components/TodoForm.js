import React from 'react';

const TodoForm = ({handleSubmit, handleChanges, newTask, dispatch}) => {

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input type='text' name='newTask' value={newTask} placeholder='Tasks' onChange={handleChanges}/>
            <div>
                <button type='submit'>Add Todo</button>
            </div>
        </form>
        <button onClick={() => dispatch({type: 'CLEAR_COMPLETED'})}>Clear Completed</button>
        </div>
    );
};

export default TodoForm;
import React from 'react';
import Todo from './Todo';

const TodoList = ({taskList, dispatch}) => {
    console.log(taskList)
    return (
        <div>
            {taskList.map(task => (
                <Todo key={task.id} task={task} dispatch={dispatch}/>
            ))}
        </div>
    );
};

export default TodoList;
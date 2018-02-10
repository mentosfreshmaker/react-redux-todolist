import React from 'react';
import PropTypes from 'prop-types'
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => (
    <div className="row">
        <ul className="list-group">
            {todos.map(todo => {
                return <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
            })}
        </ul>
    </div>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList
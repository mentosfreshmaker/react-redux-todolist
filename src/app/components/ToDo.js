import React from 'react';
import PropTypes from 'prop-types'

const Todo = ({ name, completed, onClick }) => (
    <li className="list-group-item"
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {name}
    </li>
)

Todo.propTypes = {
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Todo
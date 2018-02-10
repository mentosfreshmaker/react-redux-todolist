import { connect } from 'react-redux';
import { toggleItem } from '../actions/actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, visibilityFilter) => {
    switch(visibilityFilter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        case 'SHOW_ALL':
        default:
            return todos
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = dispatch => ({
    onTodoClick: id => dispatch(toggleItem(id))
})

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList
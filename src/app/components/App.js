import React from 'react';

import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from '../components/Footer';

const App = () => (
    <div className="container">
        <h1>Todo List</h1>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default App;
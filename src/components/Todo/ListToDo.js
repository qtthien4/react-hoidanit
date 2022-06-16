import React from "react";
import AddTodo from "./AddToDo";
import ListContent from "./ListContent";
import './ListTodo.scss'
import { toast } from 'react-toastify';

class ListToDo extends React.Component {
    state = {
        listTodos: [
            { id: 'todo1', title: 'ngu day' },
            { id: 'todo2', title: 'danh rang' }
        ]
    }

    addTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
    }

    delTodo = (todo) => {
        let currentTodo = this.state.listTodos;
        currentTodo = currentTodo.filter((item) => item.id !== todo.id)
        this.setState({ listTodos: currentTodo })
        toast.success('Delete success !')
    }

    editToDo = (todo) => {
        var listTodos = this.state.listTodos
        listTodos.map((item) => { item.id === todo.id && (item.title = todo.title) })

        this.setState({
            listTodos: listTodos
        })
        toast.success('Update success !')
    }
    render() {
        let { listTodos } = this.state
        return <>
            <div className="list-todo-container">
                <AddTodo addTodo={this.addTodo} />
                <ListContent listTodos={this.state.listTodos} delTodo={this.delTodo} editToDo={this.editToDo} />
            </div>
        </>
    }
}

export default ListToDo
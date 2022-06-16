import React from "react";

class ListContent extends React.Component {

    state = {
        editTodo: {}
    }

    handleOnClickDel = (item) => {
        this.props.delTodo(item)
    }

    handleOnClickEdit = item => {
        this.setState({ editTodo: item })
    }

    handleOnClickEnter = (todo) => {
        this.props.editToDo(this.state.editTodo)
        this.setState({ editTodo: null })
    }

    handleOnChangeEditTodo = (e) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = e.target.value
        this.setState({ editTodo: editTodoCopy })
    }

    render() {
        let listTodos = this.props.listTodos
        return <>
            <div className="list-todo-content">
                {listTodos && listTodos.length > 0 ? listTodos.map((item, index) => {
                    return <div className="todo-child" key={item.id}>
                        {this.state.editTodo === null ?
                            <>
                                <span>{index + 1} - {item.title}</span>
                                <button className="edit" onClick={() => this.handleOnClickEdit(item)}>Edit</button>
                            </> :
                            <>
                                {this.state.editTodo.id === item.id ?
                                    <>
                                        <span> {index + 1} <input value={this.state.editTodo.title} onChange={e => this.handleOnChangeEditTodo(e)} /></span>
                                        <button className="edit" onClick={() => this.handleOnClickEnter(item)}>Enter</button>
                                    </>
                                    :
                                    <>
                                        <span>{index + 1} - {item.title}</span>
                                        <button className="edit" onClick={() => this.handleOnClickEdit(item)}>Edit</button>
                                    </>
                                }
                            </>

                        }
                        <button className="del" onClick={() => this.handleOnClickDel(item)}>Delete</button>
                    </div>
                }) : <></>}
            </div>
        </>
    }
}

export default ListContent
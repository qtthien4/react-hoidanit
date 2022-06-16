import React from "react";

class Form extends React.Component {

    state = {
        todo: ''
    }

    handleSubmit = (e) => {

        e.preventDefault();
        this.state.id = Math.floor((Math.random() * 2000));
        this.props.addListUser(this.state)
        this.setState({
            name: '',
            job: ''
        })
    }
    handleTodo = (e) => {
        this.setState({ name: e.target.value })
    }
    render() {
        return (
            <form >
                <input type="text" onChange={(e) => this.handleName(e)} /> <></>
                <input type="button" value="Add" onClick={(e) => this.handleSubmit(e)} />
            </form>

        )
    }

}

export default Form 
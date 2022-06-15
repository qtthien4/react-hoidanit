import React from "react";

class Form extends React.Component {

    state = {
        name: '',
        job: ''
    }

    handleSubmit = (e) => {
        this.setState({
            name: '',
            job: ''
        })
        e.preventDefault();
        this.props.addListUser(this.state)

    }
    handleName = (e) => {
        this.setState({ name: e.target.value })
    }
    handleJob = (e) => {
        this.setState({ job: e.target.value })
    }
    render() {
        return (

            <form >
                <label> name:</label><br />
                <input type="text" onChange={(e) => this.handleName(e)} /><br />
                <label >job name:</label><br />
                <input type="text" onChange={(e) => this.handleJob(e)} /><br />
                <input type="button" value="Submit" onClick={(e) => this.handleSubmit(e)} />
            </form>

        )
    }

}

export default Form 
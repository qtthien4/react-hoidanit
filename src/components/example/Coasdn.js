import React from "react";

class ComponentCon extends React.Component {

    state = {
        status: false
    }

    handleOnClick = () => {
        this.setState({ status: !this.state.status })
    }

    render() {
        return <>
            {
                !this.state.status ?
                    <button onClick={() => this.handleOnClick()}>show</button> :
                    <> xin chao minh la component con va minh ten la {this.props.name}
                        <button onClick={() => this.handleOnClick()}>hide</button> </>
            }


        </>
    }

}

export default ComponentCon
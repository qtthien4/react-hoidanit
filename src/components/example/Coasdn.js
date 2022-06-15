import React from "react";

class ComponentCon extends React.Component {

    state = {
        status: false
    }

    handleOnClick = () => {
        this.setState({ status: !this.state.status })
    }

    handleOnClickDel = (item) => {
        this.props.delItem(item)
        // console.log(item);
    }

    render() {
        var list = this.props.listUser
        return <>
            {
                !this.state.status ?
                    <button onClick={() => this.handleOnClick()}>show</button> :
                    <>
                        {
                            list.map((item, index) => {
                                return (
                                    <div key={index}>
                                        {item.name} - {item.job} <></>
                                        <span onClick={() => this.handleOnClickDel(item)}>
                                            x
                                        </span>
                                    </div>
                                )
                            })
                        }
                        <button onClick={() => this.handleOnClick()}>hide</button>
                    </>
            }


        </>
    }

}

export default ComponentCon
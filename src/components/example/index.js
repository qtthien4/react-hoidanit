import React from "react";
import ComponentCon from "./Coasdn";
import Form from './form'

class Test extends React.Component {

    state = {
        list: [{
            id: '1',
            todo: 'ngu day'
        },
        {
            id: '2',
            job: 'an sang'
        },
        ]
    }

    addListUser = (job) => {
        this.setState({ list: [...this.state.list, job] })
    }

    delItemListUser = (itemList) => {
        let listUser = this.state.list

        listUser = listUser.filter((item) => item.id !== itemList.id)
        this.setState({ list: listUser })
    }
    render() {

        return <>
            <div><h3>Simple TODO app</h3></div>
            <Form addListUser={this.addListUser} />
            {/* <Form /> */}
            {/* <ComponentCon listUser={this.state.list} delItem={this.delItemListUser} /> */}

        </>
    }
}

export default Test
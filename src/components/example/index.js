import React from "react";
import ComponentCon from "./Coasdn";
import Form from './form'

class Test extends React.Component {

    state = {
        list: [{
            id: '1',
            name: 'quynh',
            job: 'quan tri kinh doanh'
        },
        {
            id: '2',
            name: 'hung',
            job: 'cntt'
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
            <Form addListUser={this.addListUser} />
            {/* <Form /> */}
            <ComponentCon listUser={this.state.list} delItem={this.delItemListUser} />

        </>
    }
}

export default Test
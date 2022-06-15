import React from "react";
import ComponentCon from "./Coasdn";
import Form from './form'

class Test extends React.Component {

    state = {
        list: [{
            name: 'quynh',
            job: 'quan tri kinh doanh'
        },
        {
            name: 'hung',
            job: 'cntt'
        },
        ]
    }

    addListUser = (job) => {
        this.setState({ list: [...this.state.list, job] })
    }
    render() {

        return <>
            <Form addListUser={this.addListUser} />
            {/* <Form /> */}
            <ComponentCon listUser={this.state.list} />

        </>
    }
}

export default Test
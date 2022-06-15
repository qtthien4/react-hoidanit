import React from "react";
import ComponentCon from "./Coasdn";

class Test extends React.Component {

    state = {
        name: 'quynh',
        nganh: 'quan tri kinh doanh'
    }

    HandleChange = (e) => {
        this.setState({ name: e.target.value })
    }

    handClickButton = () => {
        alert('da click')
    }

    render() {
        return <>
            <input onChange={(e) => {
                this.HandleChange(e)
            }} />
            <div>xin chao {this.state.name}</div>
            <div>lam {this.state.nganh}</div>
            <button onClick={() => this.handClickButton()}> Click Me !</button>

            <br />
            <ComponentCon name={'con thienvo'} />
        </>

    }
}

export default Test
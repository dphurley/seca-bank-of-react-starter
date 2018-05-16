import React, { Component } from 'react'
import axios from 'axios'

class DebitsList extends Component {

    state = {
        debits: []
    }

    componentDidMount() {
        axios.get('/debits')
            .then((response) => {
                this.setState({debits: response.data})
            })
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.state.debits)}
            </div>
        )
    }
}

export default DebitsList
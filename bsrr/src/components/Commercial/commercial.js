import React, { Component } from 'react';
import axios from 'axios';

export default class Commercial extends Component {

    state = {
        commercials: []
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/v1/commercials').then(res => {
            this.setState({ commercials: res.data.data });
        })
    }
    render() {
        return (
            <div className='  space-y-6'>{this.state.commercials.map((el, index) => {
                return <div className='w-96' key={index}><img className='rounded-3xl h-80 w-80' src={el.photo} alt='commercial' /></div>
            })}
            </div>
        )
    }
}

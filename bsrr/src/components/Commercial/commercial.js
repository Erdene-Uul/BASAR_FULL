import React, { Component } from 'react';
import axios from 'axios';

export default class Commercial extends Component {

    state = {
        commercials: []
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_URL}/api/v1/commercials`).then(res => {
            this.setState({ commercials: res.data.data });
        })
    }
    render() {
        return (
            <div className='  space-y-6'>{this.state.commercials.map((el, index) => {
                return <div className=' w-80' key={index}><img className='rounded-3xl xl:w-80 xl:h-80 w-72 h-72' src={el.photo} alt='commercial' /></div>
            })}
            </div>
        )
    }
}

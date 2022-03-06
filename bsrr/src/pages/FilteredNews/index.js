import React, { Component } from 'react';
import Content from '../../components/content';

export default class FilteredNews extends Component {

    render() {
        return (
            <div className='m-20 flex flex-col justify-center items-center space-y-10'>
                <h1 className='font-bold'>{`Хайлтын илэрц: ${this.props.location.state.length}`}</h1>
                    {this.props.location.state.map((el, i) => {
                        return (
                            <Content key={i} news={el} />
                        )
                    })}
              
            </div>
        )
    }
}

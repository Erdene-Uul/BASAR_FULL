import React, { useEffect } from 'react';
import Content from '../../components/content';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

const FilteredNews = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const filtered = props.news.filter(el => el.title.toLowerCase().includes(props.location.state))

    return (
        <div className='m-20 flex flex-col justify-center items-center space-y-10'>
            <h1 className='font-bold'>{`Хайлтын илэрц: ${filtered.length}`}</h1>
            {filtered.map((el, i) => {
                return (
                    <Content key={i} news={el} />
                )
            })}

        </div>
    )
}

export default withRouter(FilteredNews);

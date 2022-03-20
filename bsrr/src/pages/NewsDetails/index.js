import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Commercial from "../../components/Commercial/commercial";
import nl2br from "react-nl2br";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';


class NewsDetails extends React.Component {
    
        state = {
         news:{
            author: {
                name: '',
                photo: '',
                position: ''
            },
            categoryName:'',
            content: {
                content1: '',
                content2: ''
            },
            createdAt:'',
            description:'',
            photo:'',
            title:'',
         }
        
    }



    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_URL}/api/v1/news/${this.props.match.params.id}`).then(e => {
            this.setState({
               news: e.data.data,
            });
        })
        window.scrollTo(0, 0);
    }
    render() {
        console.log(this.state.news)
        return (

            <div className="flex mx-auto w-4/5 font-Nunito-Sans">
                <section className="md:mt-36 mt-20 flex justify-center items-center flex-col space-y-36 xl:mx-24 md:mx-16 mx-2  ">
                    <div className=" pb-20">
                        <div>
                            <span className="text-base md:text-lg underline decoration-[#EA916C] underline-offset-4">{this.state.news.categoryName}</span>
                            <h1 className="md:my-10 my-5 font-bold font-Roboto md:text-3xl text-xl md:leading-10 leading-8">{this.state.news.title}</h1>
                        </div>
                        <div className="flex mb-10 w-auto">
                            <img className="md:h-16 h-10 rounded-full" alt="author" src={this.state.news.author.photo} />
                        <div className="flex flex-col md:ml-4 ml-2 ">
                            <div className="md:mt-2 mt-1 md:text-base text-xs font-semibold">{this.state.news.author.name}</div>
                            <div className="md:text-sm text-[10px] font-mediumd text-[#64C5F8]">{this.state.news.author.position}</div>
                        </div>

                            <div className="md:ml-10 ml-3 border-l border-[#B8B8B9] text-xs md:px-6 px-2 flex justify-center items-center font-[#B9BABA]">{this.state.news.createdAt.substring(0, 10)}</div>
                        </div>
                        <div className="text-[#464C53]">
                            <div className="whitespace-pre-wrap xl:leading-7 leading-6 md:text-base text-sm">  {nl2br(this.state.news.content.content1.replace(/lnbr/g, "\n\n"))}</div>
                            <div className="">
                                <img className="xl:h-96 xl:my-6 h-auto my-3 border" alt="news" src={this.state.news.photo} />
                            </div>
                            <div className="whitespace-pre-wrap xl:leading-7 leading-6 md:text-base text-sm">
                                {nl2br(this.state.news.content.content2.replace(/lnbr/g, "\n\n"))}
                            </div>
                        </div>
                    </div>

            <div> <ul className="md:flex flex-col justify-center absolute hidden top-112 left-20 lg:left-24 xl:left-40 2xl:left-48">
          <li>
            <Link to="/">
              <div className="p-3 rounded-lg">
                <FontAwesomeIcon icon={brands('Facebook')} size="1x" />
              </div>
            </Link>
          </li>

          <li>
            <div className="p-3 rounded-lg">
              <FontAwesomeIcon icon={brands('Instagram')} size="1x" />
            </div>
          </li>

          <li>
            <Link to="/">
              <div className="p-3 rounded-lg">
                <FontAwesomeIcon icon={brands('Twitter')} size="1x" />
              </div>

            </Link>
          </li>

          <li>
            <Link to="/">
              <div className="p-3 rounded-lg">
                <FontAwesomeIcon icon={brands('Youtube')} size="1x" />
              </div>

            </Link>
          </li>
        </ul></div>
                </section>
                <aside className="w-1/3 mt-40 hidden xl:block">
                    <div className="m-10">
                        <Commercial />
                    </div>
                </aside>
            </div>

        )
    }
}

export default withRouter(NewsDetails);
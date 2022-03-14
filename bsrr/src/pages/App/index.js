import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Home from "../Home";
import Animals from "../Animals";
import News from "../News";
import Blog from "../Blog";
import Organizations from "../Organizations";
import Services from "../Sevices";
import FirstAid from "../FirstAid";
import NewsDetails from "../../components/NewsDetails";
import Footer from "../../components/Footer";
import MFooter from "../../components/MobileFooter";
import { Route, Switch } from "react-router-dom";
import Shop from "../OnlineShop";
import Login from "../Login";
import axios from 'axios';
import FilteredNews from "../FilteredNews";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import ScrollToTop from "../../components/ScrollToTop";
import About from "../About"


let test = 0;

class App extends Component {

  state = {
    news: [],
    showPopup: false,
    loading: true
  };

  closePopup = () => {
    this.setState({ showPopup: false });
  }

  handlePopup = () => {
    if (test === 0) {
      this.setState({ showPopup: true })
      test++
    }
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URL}/api/v1/news`)
      .then(response => {
        this.setState({ news: response.data.data, loading: false });
      })
      .catch(err => console.log(err))
  }


  render() {

    return (
      <div>
        <Navbar news={this.state.news} />
        <main className="lg:min-h-custom min-h-full">
          <Switch>
            <Route path="/animals" component={Animals} />
            <Route path="/news" component={() => <News news={this.state.news} />} />
            <Route path="/blog" component={Blog} />
            <Route path="/organizations" component={Organizations} />
            <Route path="/services" component={Services} />
            <Route path="/first_aid" component={FirstAid} />
            <Route path="/news_details" component={NewsDetails} />
            <Route path="/shop" component={Shop} />
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
            <Route path="/filtered" component={() => <FilteredNews news={this.state.news} />} />
            <Route path="/" component={() => <Home loading={this.state.loading} closePopup={this.closePopup} news={this.state.news} showPopup={this.state.showPopup} handlePopup={this.handlePopup} />} />
          </Switch>
        </main>
         <MessengerCustomerChat
          pageId="110141001402215"
          appId="381346643442500"
          
        />
        <ScrollToTop />
        <Footer />
        <MFooter />
      </div>
    )
  }
}
export default App;

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


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main className="min-h-custom">
          <Switch>
            <Route path="/animals" component={Animals} />
            <Route path="/news" component={News} />
            <Route path="/blog" component={Blog} />
            <Route path="/organizations" component={Organizations} />
            <Route path="/services" component={Services} />
            <Route path="/first_aid" component={FirstAid} />
            <Route path="/news_details" component={NewsDetails} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
        <Footer/>
        <MFooter />
      </div>
  )}
}
export default App;

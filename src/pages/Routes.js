import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./shops/Home";
import Home2 from "./shops/Home2";
import Error404 from "./shops/404";
import Shops from "./shops/Shops";
import Shop2 from "./shops/Shop2";
import SingleProduct from "./shops/SingleProduct";
import Blogs from "./shops/Blogs";
import BlogSingle from "./shops/BlogSingle";
import About from "./shops/About";
import FAQ from "./shops/FAQ";
import TermsCondition from "./shops/TermsCondition";
import Contact from "./shops/Contact";
import Login from "./shops/Login";
import Register from "./shops/Register";
import MyAccount from "./shops/MyAccount";
import Cart from "./shops/Cart";
import WishList from "./shops/WishList";
import Checkout from "./shops/Checkout";
import CommingSoon from "./shops/CommingSoon";
import ForgotPassword from "./shops/ForgotPassword";
import Purchases from "./shops/Purchase";

export default class Routes extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={Home2} />
          <Route path="/home" exact component={Home2} />
          <Route path="/home2" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shops" exact component={Shops} />
          <Route path="/shops/:id" component={SingleProduct} />
          <Route path="/blogs" exact component={Blogs} />
          <Route path="/blogs/:id" component={BlogSingle} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/my_account" component={MyAccount} />
          <Route path="/cart" component={Cart} />
          <Route path="/wish_list" component={WishList} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/faq" component={FAQ} />
          <Route path="/contact" component={Contact} />
          <Route path="/term_and_condition" component={TermsCondition} />
          <Route path="/comming_soon" component={CommingSoon} />
          <Route path="/forgot_password" component={ForgotPassword} />
          <Route path="/shop2" exact component={Shop2} />
          <Route path="/purchases" exact component={Purchases} />
          <Route component={Error404} />
        </Switch>
      </>
    );
  }
}

import React, { Component } from 'react'
import './App.css';
import Footer from "./components/Footer"
import NaviBar from "./components/NaviBar"
import Routes from './pages/Routes'
import { Provider } from "react-redux"
import store from './redux/store';



export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* Navigation */}
        <NaviBar />
        {/* Navigation */}
        <Routes />
        {/* Footer */}
        <Footer />
        {/* /Footer */}
      </Provider>
    )
  }
}

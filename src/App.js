import React from "react"
import Header from '../src/Component/Home/Header/Header'
import ACCESSORIES from '../src/Component/Home/Header/ACCESSORIES/ACCESSORIES'
import CUSTOMERSERVICE from '../src/Component/Home/Header/CUSTOMER SERVICE/CUSTOMERSERVICE'
import EARTHMOVERS from '../src/Component/Home/Header/EARTHMOVERS/EARTHMOVERS'
import FAQS from '../src/Component/Home/Header/FAQS/FAQS'
import FINDASTORE from '../src/Component/Home/Header/FIND A STORE/FINDASTORE'
import LOGIN from '../src/Component/Home/Header/LOGIN/LOGIN'
import MEN from '../src/Component/Home/Header/MEN/MEN'
import OUTLETS from '../src/Component/Home/Header/OUTLETS/OUTLETS'
import SALE from '../src/Component/Home/Header/SALE/SALE'
import TEL from '../src/Component/Home/Header/TEL/TEL'
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {

  return (

    <Header/>

    /*<BrowserRouter>

<Route path="/"Component={Home}/>
    <Route path="Header"Component={Header}/>

    </BrowserRouter>*/
     

  )
}
}
export default App

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import {Contact} from './components/Contact'
import About from './components/About'
import Services from './components/Services'
import Prices from './components/Prices'
import Header from './components/Header'
import Footer from './components/Footer'

require('./main.css')

class App extends React.Component {
  render () {
    const links = ['Hem', 'Tjänster', 'Om oss', 'Priser', 'Kontakt']
    return (
      <div>
        <Router>
          <div>
            <Header links={links} />
            <div className='main-container'>
              <Route exact path='/' component={Home} />
              <Route path='/tjanster' component={Services} />
              <Route path='/om-oss' component={About} />
              <Route path='/priser' component={Prices} />
              <Route path='/kontakt' component={Contact} />
            </div>
            <Footer links={links} />
          </div>
        </Router>
      </div>
    )
  }
}

ReactDOM.render(
  <App />, document.getElementById('app')
)

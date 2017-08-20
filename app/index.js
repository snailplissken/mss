import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Redirect, browserHistory } from 'react-router'
import {Home} from './components/Home'
import {Contact} from './components/Contact'
import About from './components/About'
import {Services} from './components/Services'
import Prices from './components/Prices'
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import './index.css'

class App extends React.Component {
  render () {
    return (
      <Router history={browserHistory}>
        <div className='container'>
          <Header />
          <Route exact path='/' component={Home} />
          <Route path='/tjanster' component={Services} />
          <Route path='/om-oss' component={About} />
          <Route path='/priser' component={Prices} />
          <Route path='/kontakt' component={Contact} />
          <Route path='/tjanster' render={() => (
            <Redirect to='/tjanster/hemstadning' />
          )} />
          <Footer />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />, document.getElementById('app')
)

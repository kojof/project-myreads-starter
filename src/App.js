import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Main from './Main'
import Search from './Search'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        {(
          <div>
            <Route exact path="/search" component={Search} />
            <Route exact path="/" component={Main} />
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp

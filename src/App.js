import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Main from './Main'
import Search from './Search'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    books: []
}
  componentDidMount() {
    BooksAPI.getAll().then((books) => { this.setState({ books }) })
}

updateBookShelf = (book, shelf) => {
    console.log(book);
    BooksAPI.update(book, shelf).then(() => {          
      this.setState((state) => ({
        books: state.books.map((b) => (this.updateBookShelfState(b, book, shelf)))
      }))
    })
  }

  updateBookShelfState = (b, book, shelf) => {
    if(b.id === book.id) 
        b.shelf = shelf
    return b
  }

  render() {
    return (
      <div className="app">
        {(
          <div>
            <Route exact path="/search" render={() => <Search books={this.state.books} updateBookShelf={this.updateBookShelf} />} />
            <Route exact path="/" render={() => <Main books={this.state.books} updateBookShelf={this.updateBookShelf} />} />
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp

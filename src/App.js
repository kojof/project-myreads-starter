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

    BooksAPI.update(book, shelf).then(() => {
      // update book shelf
      book.shelf = shelf
      this.setState((state) => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }))
    })
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

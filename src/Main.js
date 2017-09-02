import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'
import './App.css'

class Main extends React.Component {
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
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <BookShelf books={this.state.books} name="Currently Reading" filterBy="currentlyReading"  updateBookShelf={this.updateBookShelf} />
                    <BookShelf books={this.state.books} name="Want to Read" filterBy="wantToRead" />
                    <BookShelf books={this.state.books} name="Read" filterBy="read" />
                </div>
            </div>
        )
    }
}

export default Main
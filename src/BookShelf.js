import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import Book from './book'

class BookShelf extends React.Component {

    render() {

        const { books, name, filterBy } = this.props;

        return (
            <div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">{name}</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">

                                    {books.filter(book => book.shelf === filterBy).map((book) => (
                                        <Book
                                            id={book.id}
                                            shelf={book.shelf}
                                            authors={book.authors}
                                            title={book.title}
                                            imageLinks={book.imageLinks}
                                            updateBookShelf={this.props.updateBookShelf}
                                            book={book}
                                        />
                                    ))
                                    }
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>)
    }
}

export default BookShelf
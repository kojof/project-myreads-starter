import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import './App.css'
import Book from './Book'


class Search extends React.Component {
    state = {
        query: '',
        books: []
    }

    searchBooks = (query) => {
        if (query.trim() === '') return

        this.setState({ query: query.trim() })      

        if (this.state.query) {
            BooksAPI.search(query).then((response) => {
                if (!response || response.error) return

                this.setState({
                    books: response.map(book => {
                        book.shelf = 'none'
                        return book
                    })
                })
            })
        }
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={(event) => this.searchBooks(event.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.map((book) => (
                            <Book key={book.id}
                                id={book.id}
                                shelf={book.shelf}
                                authors={book.authors}
                                title={book.title}
                                imageLinks={book.imageLinks}
                                updateBookShelf={this.props.updateBookShelf}
                                book={book}
                            />
                        ))}
                    </ol>
                </div>
            </div>)
    }
}

export default Search
import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import './App.css'
import Book from './Book'


class Search extends React.Component {
    state = {
        query: '',
        showingBooks: []
    }

    searchBooks = (query) => {

        this.setState({ query: query.trim() })

        if (query.trim() === '') return

        let showingBooks;

        if (this.state.query) {
            BooksAPI.search(query).then((response) => {

                if (!response || response.error) return
                this.setState({ showingBooks: response })
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
                        {this.state.showingBooks.map((book) => (
                            <Book
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
import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import './App.css'
import Book from './book'


class Search extends React.Component {
    state = {
        query: '',
        books: []
    }

    searchBooks = (query) => {
        if (query.trim() === '') return

        this.setState({ query: query.trim() })      

        let books;

        if (this.state.query) {
            BooksAPI.search(query).then((response) => {
                if (!response || response.error) return
                this.setState({ books: response })
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
                            <Book
                                id={book.id}
                                shelf={book.shelf}
                                authors={book.authors}
                                title={book.title}
                                imageLinks = { book.imageLinks  &&  book.imageLinks.thumbnail ?  book.imageLinks: 'https://books.google.ca/googlebooks/images/no_cover_thumb.gif'}                               
                                   
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
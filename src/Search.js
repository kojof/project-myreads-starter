import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import './App.css'
import Book from './Book'


class Search extends React.Component {
    state = {
        query: '',
        //books: []
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim() })
    }

    render() {

        //const { books } = this.props
        const { query } = this.state

        let showingBooks;
      
        if (this.state.query) {
            BooksAPI.search(query).then((response) => {
                showingBooks = response.map((book) => {
                    return {
                        id: book.id,
                        shelf: book.shelf,
                        authors: book.authors,
                        title: book.title,
                        imageLinks: {
                            thumbnail: book.imageLinks.thumbnail
                        }
                    }
                })
                    this.setState({ showingBooks })
                console.log(showingBooks)
            })
        }


        return (
            <div className="search-books">

                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {showingBooks.map((book) => (
                            <Book
                                id={book.id}
                                shelf={book.shelf}
                                authors={book.authors}
                                title={book.title}
                                imageLinks={book.imageLinks}
                            />
                        ))}
                    </ol>
                </div>
            </div>)
    }
}

export default Search
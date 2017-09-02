import React from 'react'
import './App.css'

class BookShelf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'none'};    
        this.handleChange = this.handleChange.bind(this);              
      }

    state = {
        
    }

    handleChange(event) {     
        this.setState({ value: event.target.value });
    }

    updateBookShelf = (shelf) => {
        this.props.updateBookShelf(this.props.book, shelf)
      }

    render() {

        const { books, name, filterBy, updateBookShelf } = this.props;
     //   const { bookShelf } = this.state;
        let showingBooks;
        showingBooks = books;
       
        return (
            <div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">{name}</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">

                                    {showingBooks.filter(book => book.shelf === filterBy).map((book) => (
                                        <li key={book.id}>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                                    <div className="book-shelf-changer">
                                                        <select className='form-control' value={this.state.value}  onChange={(event) => this.updateBookShelf(event.target.value)} >
                                                            <option value="none" disabled>Move to...</option>
                                                            <option value="currentlyReading">Currently Reading</option>
                                                            <option value="wantToRead">Want to Read</option>
                                                            <option value="read">Read</option>
                                                            <option value="none">None</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="book-title">{book.title}</div>
                                                <div className="book-authors">{book.authors}</div>
                                            </div>
                                        </li>))
                                    }
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>
            </div>)
    }
}

export default BookShelf
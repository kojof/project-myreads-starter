import React from 'react'
import './App.css'
import BookShelf from './bookshelf'

class Book extends React.Component {
    render() {
        const { id, title, authors, imageLinks, shelf, book, updateBookShelf } = this.props

        return (<li key={id}>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select className='form-control' value={shelf} onChange={(event) => this.props.updateBookShelf(book, event.target.value)} >
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors}</div>
            </div>
        </li>)
    }
}

export default Book;
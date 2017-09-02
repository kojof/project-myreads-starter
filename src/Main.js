import React from 'react'
import BookShelf from './BookShelf'
import BookApp from './App'
import './App.css'

class Main extends React.Component {



    render() {
        return (
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <BookShelf books={this.props.books} name="Currently Reading" filterBy="currentlyReading"  updateBookShelf={this.props.updateBookShelf} />
                    <BookShelf books={this.props.books} name="Want to Read" filterBy="wantToRead" updateBookShelf={this.props.updateBookShelf}/>
                    <BookShelf books={this.props.books} name="Read" filterBy="read" updateBookShelf={this.props.updateBookShelf}/>
                </div>
            </div>
        )
    }
}

export default Main
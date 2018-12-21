import React, { Component } from 'react'
import { Stitch } from 'mongodb-stitch-browser-sdk'

import Books from '../components/Books'
import Book from './Book'

export default class Kindle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      books: [],
      book: null
    }
    this.client = Stitch.defaultAppClient
    this.closeBookDialog = this.closeBookDialog.bind(this)
  }

  closeBookDialog () {
    this.setState({ book: null })
  }

  componentWillMount () {
    this.client.callFunction('getBooks').then(books => {
      this.setState({ books })
    })
  }

  render () {
    const { books, book } = this.state
    return (
      <div>
        {book && <Book book={book} close={this.closeBookDialog} />}
        <Books
          books={books}
          clickTableRow={bookId => {
            this.client.callFunction('getBook', [bookId]).then(book => {
              this.setState({ book })
            })
          }}
        />
      </div>
    )
  }
}

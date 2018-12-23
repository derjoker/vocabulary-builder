import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Slide from '@material-ui/core/Slide'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import CloseIcon from '@material-ui/icons/Close'
import { Stitch } from 'mongodb-stitch-browser-sdk'
import flattenDepth from 'lodash/flattenDepth'
import escape from 'lodash/escape'
import stringify from 'csv-stringify'

import Lookups from '../components/Lookups'

function card (word, example, definition, explanation) {
  const front = `<h2>${escape(word)}</h2><p>${escape(example)}</p>`
  const back = explanation
    ? `<p>${escape(explanation)}</p><p>${escape(definition)}</p>`
    : `<p>${escape(definition)}</p>`
  return [front, back]
}

const styles = {
  appBar: {
    position: 'sticky'
  },
  flex: {
    flex: 1
  }
}

function Transition (props) {
  return <Slide direction='up' {...props} />
}

const dicts = {
  de: 'duden'
}

class Book extends Component {
  constructor (props) {
    super(props)
    this.client = Stitch.defaultAppClient
  }

  render () {
    const { classes, book, close } = this.props
    return (
      <Dialog open fullScreen onClose={close} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography
              variant='title'
              color='inherit'
              className={classes.flex}
            >
              {book.title}
            </Typography>
            <IconButton
              color='inherit'
              onClick={() => {
                const dict = dicts[book.lang]
                dict &&
                  this.client
                    .callFunction('getWords', [
                      dict,
                      book.lookups.map(lookup => lookup.stem)
                    ])
                    .then(words => {
                      console.log(words)
                      const cards = flattenDepth(
                        words.map(word =>
                          word.definitions.map(definition =>
                            definition.examples.map(example =>
                              card(
                                word.word,
                                example.example,
                                definition.definition,
                                example.definition
                              )
                            )
                          )
                        ),
                        2
                      )
                      console.log(cards)
                      stringify(cards, (error, output) => {
                        if (error) console.log(error)
                        else {
                          // console.log(output)
                          const filename = 'anki.csv'
                          const data = encodeURI(
                            'data:text/csv;charset=utf-8,' + output
                          )
                          const link = document.createElement('a')
                          link.setAttribute('href', data)
                          link.setAttribute('download', filename)
                          link.click()
                        }
                      })
                    })
              }}
              aria-label='Download'
            >
              <CloudDownloadIcon />
            </IconButton>
            <IconButton color='inherit' onClick={close} aria-label='Close'>
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Lookups
          lookups={book.lookups}
          save={(lookupId, stem) => {
            this.client.callFunction('updateStem', [book._id, lookupId, stem])
          }}
          find={() => {
            const dict = dicts[book.lang]
            if (dict) {
              return stem =>
                this.client.callFunction('getWords', [dict, [stem]])
            }
          }}
        />
      </Dialog>
    )
  }
}

Book.propTypes = {
  classes: PropTypes.object.isRequired,
  book: PropTypes.object
}

export default withStyles(styles)(Book)

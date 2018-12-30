import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

class Word extends Component {
  render () {
    const { word } = this.props
    return (
      <Paper>
        <Typography variant='title'>{word.word}</Typography>
        <Typography component='ul'>
          {word.definitions.map(definition => (
            <li key={definition._id}>
              <Typography variant='subheading'>
                {definition.definition}
              </Typography>
              <Typography component='ol'>
                {definition.examples.map(example => (
                  <li key={example._id}>
                    {example.example +
                      (example.definition ? ' ' + example.definition : '')}
                  </li>
                ))}
              </Typography>
            </li>
          ))}
        </Typography>
      </Paper>
    )
  }
}

Word.propTypes = {
  word: PropTypes.object.isRequired
}

export default Word

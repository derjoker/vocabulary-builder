import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Chip from '@material-ui/core/Chip'
import EditIcon from '@material-ui/icons/Edit'

class Stem extends Component {
  render () {
    const { lookup } = this.props
    return (
      <Chip
        key={lookup._id}
        label={lookup.stem}
        variant='outlined'
        onDelete={() => {
          console.log(lookup)
        }}
        deleteIcon={<EditIcon />}
      />
    )
  }
}

Stem.propTypes = {
  lookup: PropTypes.object.isRequired
}

export default Stem

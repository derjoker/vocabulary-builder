import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Chip from '@material-ui/core/Chip'
import EditIcon from '@material-ui/icons/Edit'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

class Stem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      stem: this.props.lookup.stem
    }
    this.close = this.close.bind(this)
  }

  close () {
    this.setState({ open: false })
  }

  render () {
    const { lookup, save } = this.props
    return (
      <div>
        <Chip
          key={lookup._id}
          label={lookup.stem}
          variant='outlined'
          onDelete={() => {
            this.setState({ open: true })
          }}
          deleteIcon={<EditIcon />}
        />
        <Dialog
          open={this.state.open}
          onClose={this.close}
          onBlur={this.close}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>Edit</DialogTitle>
          <DialogContent>
            <DialogContentText>{lookup.usage}</DialogContentText>
            <TextField
              autoFocus
              margin='dense'
              id='stem'
              label='Stem'
              fullWidth
              value={this.state.stem}
              onChange={event => {
                this.setState({ stem: event.target.value })
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.close} color='primary'>
              Cancel
            </Button>
            <Button
              onClick={() => {
                save(lookup._id, this.state.stem)
                // positive response
                lookup.stem = this.state.stem
                this.setState({ open: false })
              }}
              color='primary'
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

Stem.propTypes = {
  lookup: PropTypes.object.isRequired,
  save: PropTypes.func.isRequired
}

Stem.defaultProps = {
  save: (lookupId, stem) => {
    console.log(lookupId, stem)
  }
}

export default Stem

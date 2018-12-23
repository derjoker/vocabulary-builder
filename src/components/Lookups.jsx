import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Typography from '@material-ui/core/Typography'

import Stem from './Stem'

class Lookups extends Component {
  render () {
    const { lookups, save, find } = this.props
    return (
      <Table>
        <TableBody>
          {lookups.map(lookup => (
            <TableRow key={lookup._id}>
              <TableCell>
                <Typography>{lookup.usage}</Typography>
                <Stem lookup={lookup} save={save} find={find} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
}

Lookups.propTypes = {
  lookups: PropTypes.array.isRequired,
  save: PropTypes.func.isRequired,
  find: PropTypes.func
}

Lookups.defaultProps = {
  lookups: [],
  save: (lookupId, stem) => {
    console.log(lookupId, stem)
  }
}

export default Lookups

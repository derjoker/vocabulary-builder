import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Typography from '@material-ui/core/Typography'
import groupBy from 'lodash/groupBy'
import entries from 'lodash/entries'

import Stem from './Stem'

class Usages extends Component {
  render () {
    const { save } = this.props
    const byUsage = groupBy(this.props.lookups, 'usage')
    const usages = entries(byUsage).map(([usage, lookups]) => ({
      usage,
      pos: 'pos',
      lookups
    }))

    return (
      <Table>
        <TableBody>
          {usages.map(usage => (
            <TableRow key={usage.usage}>
              <TableCell>
                <Typography>{usage.usage}</Typography>
                {usage.lookups.map(lookup => (
                  <Stem lookup={lookup} save={save} />
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
}

Usages.propTypes = {
  lookups: PropTypes.array.isRequired,
  save: PropTypes.func.isRequired
}

Usages.defaultProps = {
  lookups: [],
  save: (lookupId, stem) => {
    console.log(lookupId, stem)
  }
}

export default Usages

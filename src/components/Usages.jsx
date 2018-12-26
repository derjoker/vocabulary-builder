import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Typography from '@material-ui/core/Typography'
import groupBy from 'lodash/groupBy'
import entries from 'lodash/entries'
import sortBy from 'lodash/sortBy'

import Stem from './Stem'

class Usages extends Component {
  render () {
    const { save, find, lookups } = this.props
    lookups.forEach(lookup => {
      lookup.pos =
        parseInt(lookup.pos, 10) || parseInt(lookup.pos.split(':')[1], 10)
    })
    const byUsage = groupBy(sortBy(lookups, 'pos'), 'usage')
    const usages = entries(byUsage).map(([usage, lookups]) => ({
      usage,
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
                  <Stem
                    key={lookup._id}
                    lookup={lookup}
                    save={save}
                    find={find}
                  />
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
  save: PropTypes.func.isRequired,
  find: PropTypes.func
}

Usages.defaultProps = {
  lookups: [],
  save: (lookupId, stem) => {
    console.log(lookupId, stem)
  }
}

export default Usages

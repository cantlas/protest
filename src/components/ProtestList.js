import React from 'react'
import PropTypes from 'prop-types'
import Protest from './Protest'

const ProtestList = ({protests}) => (
      <ul>
        {protests.map(protest => (
          <Protest key={protest.id} {...protest} />
        ))}
      </ul>
    )

ProtestList.propTypes = {
  protests: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      about: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default ProtestList

import React from 'react'
import PropTypes from 'prop-types'
import Comments from './Comments'

const Protest = ({ title, location, date, time, about }) => (
      <li>
        {title} <br />
        {location} <br />
        {date} at {time} <br />
        <Comments />
      </li>
    )

Protest.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
}

export default Protest

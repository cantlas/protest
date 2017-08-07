import React from 'react'
import { connect } from 'react-redux'
import ProtestList from '../components/ProtestList'

const mapStateToProps = state => {
  return {
    protests: state.protests
  }
}

const ProtestListContainer = connect(mapStateToProps)(ProtestList)

export default ProtestListContainer

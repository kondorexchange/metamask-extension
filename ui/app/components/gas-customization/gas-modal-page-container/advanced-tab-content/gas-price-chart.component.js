import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class GasPriceChart extends Component {
  static contextTypes = {
    t: PropTypes.func,
  }

  render () {
    return (
      <div id="container">
        <div id="chart"></div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import util from '../helpers/util'
import { connect } from 'react-redux'
import { fetchProducts } from '../redux/actions/productActions'
import { addToCart } from '../redux/actions/cartActions'

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {}
}

import React, { Component } from 'react'
import util from '../helpers/util'
import { connect } from 'react-redux'
import {
  fetchProducts,
  deleteProduct,
  setProductOnForm
} from '../redux/actions/productActions'
import { addToCart } from '../redux/actions/cartActions'

class ProductsHandler extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    const productItems = this.props.products.map(product => (
      <div className='col-md-4' key={product.id}>
        <div className='thumbnail text-center'>
          <a
            href={`#${product._id}`}
            onClick={() => this.props.addToCart(this.props.cartItems, product)}
          >
            <img src={product.photo} alt='photo' />
            <p>{product.title}</p>
          </a>
          <b>{util.formatCurrency(product.price)}</b>
          <button
            className='btn btn-danger btn-xs'
            onClick={() => this.props.deleteProduct(product._id)}
          >
            Delete Product
          </button>
          <button
            className='btn-update'
            onClick={() => this.props.setProductOnForm(product._id)}
          >
            Update Product
          </button>
        </div>
      </div>
    ))

    return <div className='row'>{productItems}</div>
  }
}

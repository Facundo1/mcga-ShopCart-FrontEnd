import React, { Component } from 'react'
import util from '../helpers/utils'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchProducts } from '../redux/actions/productActions'
import { addToCart } from '../redux/actions/cartActions'

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    const productItems = this.props.products.map(product => (
      <div className='col-md-4' key={product._id}>
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
            className='btn btn-primary'
            onClick={() => this.props.addToCart(this.props.cartItems, product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    ))
    return <div className='row'>{productItems}</div>
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  cartItems: state.cart.items
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addToCart, fetchProducts }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)

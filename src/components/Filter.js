import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filterProducts, sortProducts } from '../redux/actions/productActions'

class Filter extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-md-4'>
          {`${this.props.products.length} products found.`}
        </div>
        <div className='col-md-4'>
          <label>
            Order by
            <select
              className='form-control'
              value={this.props.sort}
              onChange={e =>
                this.props.sortProducts(this.props.products, e.target.value)
              }
            >
              <option value=''>Price</option>
              <option value='lowestprice'>Lowest to highest</option>
              <option value='highestprice'>Highest to lowest</option>
            </select>
          </label>
        </div>
      </div>
    )
  }
}

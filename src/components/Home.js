import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postProduct, updateProduct } from '../redux/actions/productActions'
import { Formik, Form, Field } from 'formik'
import { Link } from 'react-router-dom'
import { isAuth, logOut } from '../redux/actions/loginActions'

class Home extends Component {
  capturarDatos() {
    console.log('ENTRO AL CAPTURA')
    const productToUpdate = this.props.products.find(
      product => product._id === this.props.productSelected
    )
    return {
      title: productToUpdate.title,
      description: productToUpdate.description,
      availableSize: productToUpdate.availableSize,
      price: productToUpdate.price
    }
  }
  render() {
    return ( 
    <div className='container'>
    <h1>---Admin panel---</h1>
    {this.props.isAuth ? (
      <div className='logged'>
        <div>Admin session</div>
        <div className='buttonmenu'>
          <Link to='/login' onClick={this.props.logOut}>
            Logout
          </Link>
        </div>
      </div>
    ) : (
      <div id='login2'>
        <div className='buttonmenu'>
          <Link to='/register'>Sign up</Link>
        </div>
        <div className='buttonmenu'>
          <Link to='/login'>Login</Link>
        </div>
      </div>
    )}
    <hr />)
  }
}

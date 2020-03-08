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
    <hr />
    <div className='row'>
          <div>
            <h4>Add new product ↓</h4>
            <div className='form-container'>
              <Formik
                initialValues={{
                  id: '',
                  photo: 'https://via.placeholder.com/150',
                  title: '',
                  description: '',
                  availableSize: '',
                  price: 0
                }}
                onSubmit={values => {
                  this.props.postProduct(values)
                }}
              >
                {({ handleSubmit }) => (
                  <Form
                    onSubmit={handleSubmit}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      marginTop: '20px',
                      border: '2px solid'
                    }}
                  >
                    <Field type='text' name='id' placeholder='code' />
                    <Field type='text' name='title' placeholder='tittle' />
                    <Field
                      type='text'
                      name='description'
                      placeholder='description'
                    />
                    <Field
                      type='text'
                      name='availableSize'
                      placeholder='availableSize'
                    />
                    <Field type='number' name='price' placeholder='price' />
                    <button type='submit'>Submit</button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className='col-md-8'>
            <ProductsHandler />
          </div>
    )
  }
}

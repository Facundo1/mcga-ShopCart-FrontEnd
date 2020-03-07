import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { postUser } from '../redux/actions/loginActions'

class Register extends Component {
    render() {
        return (
          <div className='wrapper'>
            <div className='register-container'>
              <div className='top'>
                <h2>
                  WELCOME TO THE REGISTER, COMPLETE THE FIELDS BELOW TO CREATE USER
                </h2>
              </div>
    
              <Formik
                initialValues={{ name: '', email: '', password: '', address: '' }}
                onSubmit={values => {
                  this.props.postUser(values)
                }}
              >
                {({ handleSubmit }) => (
                  <Form
                    onSubmit={handleSubmit}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: '20px'
                    }}
                  >
                    <Field
                      type='text'
                      name='name'
                      id='inputUser'
                      placeholder='name'
                      style={{ margin: '15px' }}
                    />
                    <Field
                      type='text'
                      name='email'
                      id='inputEmail'
                      placeholder='email'
                      style={{ margin: '15px' }}
                    />
                    <Field
                      type='password'
                      name='password'
                      id='inputPassword'
                      placeholder='password'
                      style={{ margin: '15px' }}
                    />
                    <Field
                      type='text'
                      name='address'
                      id='inputAddress'
                      placeholder='address'
                      style={{ margin: '15px' }}
                    />
                    <button id='submitButton' type='submit'>
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>
              <div id='container-back-to-login'>
                <Link id='back-to-login' to='/login'>
                  Back to Login
                </Link>
              </div>
            </div>
          </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users,
    isLoading: state.isLoading
})
  
export default connect(mapStateToProps, { postUser })(Register)

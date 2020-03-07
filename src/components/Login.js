import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import { connect } from 'react-redux'
import { loginAccount } from '../redux/actions/loginActions'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'


class Login extends Component {
    constructor(props) {
        super(props)
        this.getLogin = this.getLogin.bind(this)
    }
    getLogin = values => {
        console.log(this.props)
        this.props.loginAccount(values).then(response => {
          console.log(response)
          if (this.props.isAuth) {
            this.props.history.push('/home')
          }
        })
    }
    render() {
        return (
            <div className='login-container'>
              <Formik
                initialValues={{ name: '', password: '' }}
                onSubmit={this.getLogin}
              >
                {({ handleSubmit }) => (
                  <Form
                    onSubmit={handleSubmit}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-around',
                      marginTop: '20px'
                    }}
                  >
                    <div className='Container'>
                      <div id='login'>
                        <Field
                          type='text'
                          id='inputName'
                          name='name'
                          placeholder='name'
                        />
                        <Field
                          type='password'
                          id='inputPassword'
                          name='password'
                          placeholder='password'
                        />
                      </div>
                      <div id='buttonsLoginContainer'>
                        <div className='createAccount'>
                          <Link
                            id='buttonCreateAccount'
                            className='buttonLogin'
                            to='/register'
                          >
                            Create Account
                          </Link>
                        </div>
                        {!this.props.isLoading ? (
                          <button
                            type='submit'
                            id='buttonLogin'
                            className='buttonLogin'
                          >
                            Log In
                          </button>
                        ) : (
                          <ClipLoader size={75} color={'white'} loading />
                        )}
                        <div>
                          {this.props.failedLogin ? (
                            <div id='bad-credentials'>BAD CREDENTIALS</div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      users: state.users,
      isLoading: state.users.isLoading,
      isAuth: state.users.isAuth,
      failedLogin: state.users.failedLogin
    }
}
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators({ loginAccount }, dispatch)
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login)
  
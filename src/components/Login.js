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

    }
}
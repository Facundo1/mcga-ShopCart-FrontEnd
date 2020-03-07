import React, { Component } from 'react'
import util from '../helpers/util'
import { connect } from 'react-redux'
import { removeFromCart } from '../redux/actions/cartActions'

class Basket extends Component {
     
    render() {
        const {cartItems} = this.props  
        return (
            <div className='alert alert-info'>
                {cartItems.length===0? "Basket is empty" :<div>you have {cartItems.length} products in the basket</div>}

                {cartItems.length > 0 &&
                    <div>
                        <ul style={{ marginLeft: -25 }}>
                            {cartItems.map(item => (
                                <li key={item.id}>
                                    <b>{item.title}</b>
                                    <button style={{ float: 'right' }} className="btn btn-danger btn-xs"
                                        onClick={() => this.props.removeFromCart(this.props.cartItems, item)}>X</button>
                                    <br />
                                    {item.count} X {util.formatCurrency(item.price)}
                                </li>))
                            }
                        </ul>
import React, { Component } from 'react';
import '../style/contact.css';

export default class Contact extends Component{
    constructor(props){
        super(props)

        this.state = {
            isOpen: false
        }

        this.handleOpenContact = this.handleOpenContact.bind(this)
    }

    //func that open and close contact 
    handleOpenContact(event) {
        let { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
    }

    render(){
        let { isOpen } = this.state;
        return <li className="contact" onClick={this.handleOpenContact}>
            <img src={this.props.img} width="60px" height="60px" className="contact-image" />
            <div className="contact-info">
                <div className="contact-name">{this.props.name}</div>
                <div className="contact-number">{this.props.phoneNumber}</div>
                {isOpen && ( // if false -  closed contact, true - opened
                    <div className="aditional-info">
                        <div className="contact-email">{this.props.email}</div>
                        <div className="contact-address">{this.props.address}</div>
                    </div>)}
            </div>
        </li>;
    }
}

import React, { Component } from 'react';
import './contactsList.css';
import Contact from './Contact.js';

let CONTACTS = [
  {
    id: 1,
    name: 'Darth Vader',
    phoneNumber: '+250966666666',
    image: 'img/darth.gif',
    email: 'darth@gmail.com',
    address: 'Ship 3, room 5'
  }, {
    id: 2,
    name: 'Princess Leia',
    phoneNumber: '+250966344466',
    image: './img/leia.gif',
    email: 'leia@gmail.com',
    address: 'Ship 5, room 7'
  }, {
    id: 3,
    name: 'Luke Skywalker',
    phoneNumber: '+250976654433',
    image: './img/luke.gif',
    email: 'luke@gmail.com',
    address: 'Ship 1, room 2'
  }, {

    id: 4,
    name: 'Chewbacca',
    phoneNumber: '+250456784935',
    image: './img/chewbacca.gif',
    email: 'chewbacca@gmail.com',
    address: 'Ship 4, room 1'
  }
];

export default class ContactsList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayedContacts: CONTACTS
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  //func for searching contacts
  handleSearch(event) {
    let searchQuery = event.target.value.toLowerCase();
    let displayedContacts = CONTACTS.filter((elem) => {
      let searchValue = elem.name.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    });
    this.setState({ displayedContacts });
  }

  render() {
    return (
      <div className="contacts">
        <input type="text" className="search-field" placeholder="Search..." onChange={this.handleSearch} />
        <ul className="contacts-list">
          {
            this.state.displayedContacts.map((elem) => {
              return <Contact key={elem.id}
                name={elem.name}
                phoneNumber={elem.phoneNumber}
                img={elem.image}
                email={elem.email}
                address={elem.address} />;
            })
          }
        </ul>
      </div>
    );
  }
}



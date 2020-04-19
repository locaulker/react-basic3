import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types'

// Child Component
const Person = ({person: {img, name, age, info}}) => {
  //const {img, name, age, info} = props.person

  return (
    <article>
      <img src={img} alt="Person"/>
      <h4>Name: {name}</h4>
      <h4>Age: {age}</h4>
      <h4>Info: {info || "default info about the person"}</h4>
    </article>
  )
}
Person.propTypes = {
  //img: PropTypes.string.isRequired,
  //name: PropTypes.string.isRequired,
  //age: PropTypes.number.isRequired,
  //info: PropTypes.string.isRequired
  person: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    info: PropTypes.string.isRequired
  })
}

Person.defaultProps = {
  //img: "https://randomuser.me/api/portraits/thumb/men/45.jpg",
  //name: "James Doe",
  //age: 34,
  //info: "Default info about person"
  person: {
    info: "Default info about the person"
  }
}

// Parent Component
class PersonList extends Component {

  state = {
    people: [
      {
        id: 1,
        img: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
        name: "John Doe",
        age: 24
      },
      {
        id: 2,
        img: "https://randomuser.me/api/portraits/thumb/men/34.jpg",
        name: "Bob",
        age: 27
      },
      {
        id: 3,
        img: "https://randomuser.me/api/portraits/thumb/men/87.jpg",
        name: "Peter Smith",
        age: 27,
        info: "Some random info"
      },
    ]
  }

  render() {
    return (
      <section>
        {this.state.people.map((person) => (
          <Person 
            key={person.id} 
            //img={person.img} 
            //name={person.name} 
            //age={person.age} 
            //info={person.info}
            person={person}
          />
        ))}
      </section>
    )
  }
}

// Main Component
class App extends Component {
  render() {
    return (
      <h1>
        <PersonList />
      </h1>
    );
  }
}

export default App;

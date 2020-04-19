import React, {Component} from 'react'
import './App.scss'

// Component
class Form extends Component {
	state = {
		firstName: '',
		lastName: '',
		people: []
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = e => {
		e.preventDefault()
		const firstName = this.state.firstName
		const lastName = this.state.lastName
		console.log(firstName, lastName)
	}

	render() {
		return (
			<section>
				<article>
					<form onSubmit={this.handleSubmit}>
            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
						<input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
						<button type="submit">Submit</button>
					</form>
				</article>
				<article>
					<h1>People</h1>
					<div>{this.state.people}</div>
				</article>
			</section>
		)
	}
}

// Top Parent Component
class App extends Component {
	render() {
		return <Form />
	}
}

export default App

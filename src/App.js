import React, {Component} from "react"
import "./App.scss"

// Top Parent Component
class App extends Component {
	state = {
		count: 0,
	}
	render() {
		return (
			<>
				<div style={{margin: "3rem", fontSize: "2rem"}}>
					<button type="button">Decrease</button>
					<span style={{margin: "1rem"}}>Count: {this.state.count}</span>
					<button type="button">Increase</button>
				</div>
			</>
		)
	}
}

export default App

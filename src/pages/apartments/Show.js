import React, { Component } from 'react'
import { getApartment } from '../../api'

class Show extends Component {
	constructor(props) {
		super()

		this.state = {
			a: {}
		}
	}

	componentWillMount() {
		getApartment(this.props.match.params.id).then(object => { this.setState({a:object})})
	}

	render() {
		let { a } = this.state
		return (
			<main>
				<h1>{a.street1}</h1>
				<h3>{a.city}, {a.state}, {a.zip}</h3>
				<h3>{a.phone}</h3>
				<h3>{a.hours}</h3>
			</main>
		)
	}
}

export default Show

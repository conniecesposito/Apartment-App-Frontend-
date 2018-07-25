import React, { Component } from 'react'
import { getApartments } from '../../api'
import Card from '../../components/ApartmentCard'

class All extends Component {
	constructor(props) {
		super(props)

		this.state = {
			apartments: []
		}
	}

	componentWillMount() {
		getApartments().then(list => { this.setState({apartments:list})})
	}

	render() {
		let { apartments } = this.state

		return (
			<main>
				<h1>All Apartments</h1>
				{apartments.map(apartment => {
					return (<Card key={apartment.id} apartment={apartment} />)
				})}
			</main>
		)
	}
}

export default All

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ApartmentCard extends Component {
	render() {
		let { apartment } = this.props
		return (
			<Link to={'/apartments/' + apartment.id}>
				<article>
					<img src= "#" />
					<div>
						<h3>{apartment.name}</h3>
						<p className="detail">{apartment.city}, {apartment.state}</p>
						<p>{apartment.phone}, {apartment.hours}</p>
					</div>
				</article>
			</Link>
		)
	}
}

export default ApartmentCard

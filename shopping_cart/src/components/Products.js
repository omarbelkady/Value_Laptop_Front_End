import React, { Component } from 'react';

export default class Products extends Component {
	render() {
		const productItems = this.props.products.map( product => (
			<div className="col-md-4">
				<div className="thumbnail text-center">
					<a href={`#${product.id}`} onClick={this.props.handleAddToCard}>
						<img src={`/products/${product.sku}.jpg`} alt={product.title} />
					</a>
				</div>
			</div>
		)

		)
		return(
			<div className="row">
			  	{productItems}
			</div>
		)
	}	
}

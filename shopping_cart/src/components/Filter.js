import React, { Component } from 'react';

export default class Filter extends Component {
	render(){
		return (
			<div className="row">
				<div className="col-md-4">
					{this.props.count} products found.
				</div>
				<div className="col-md-4">
					<label>
						Order by
						<select className="form-control" value={this.props.size}
						onChange={this.props.handleChangeSize}>
						<option value="">Select </option>
						<option value="lowest">Lowest To Highest </option>
						<option value="highest">Highest To Lowest</option>
						</select>
					</label>
				</div>
				<div className="col-md-4"></div>
					<label>
						Filter size by
						<select className="form-control" value={this.props.sort}
							onChange={this.props.handleChangeSort}>
							<option value="">All</option>
							<option value="xs">XS</option>
							<option value="s">S</option>
							<option value="m">M</option>
							<option value="l">L</option>
							<option value="xl">XL</option>
							<option value="xxl">XXL</option>
						</select>
					</label>
			</div>
		)
	}
}

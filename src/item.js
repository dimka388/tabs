'use strict';

import React, { Component } from 'react';

export default class Item extends Component {
	render() {
		return (
			<li>
				<a href={'#' + this.props.data.id}
					onClick={e => this.props.switchTabs(this.props.data.id, e)}
					className={this.props.state.active === this.props.data.id ? 'active': ''}>
						{this.props.data.link}
				</a>
			</li>
		)
	}
}

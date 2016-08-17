'use strict';

import React, { Component } from 'react';

export default class TabContent extends Component {
	render() {
		return (
			<div className="tab-content">
				{this.props.state.tabs.map((item, i) => (
					<div key={i}
						id={item.id}
						className={this.props.state.active === item.id ? 'active': ''}>
						{item.tab}
						<a href='#' className="closer" onClick={e => this.props.switchTabs(null, e)}>X</a>
					</div>
				))}
			</div>
		)
	}
}

'use strict';

import React, { Component } from 'react';

import Item from './item';

export default class Tabset extends Component {
	render() {
		return (
			<ul className="tabset">
				{this.props.state.tabs.map((item, i) => (
					<Item
						key={i}
						data={item}
						switchTabs={(id, e) => this.props.switchTabs(id, e)}
					/>
				))}
			</ul>
		)
	}
}

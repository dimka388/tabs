'use strict';

import React, { Component } from 'react';

import Tabset from './tabset';

import TabContent from './tabcontent';

export default class Tabs extends Component {
	state = {
		active: null,
		tabs: [
			{
				id: 'tab1',
				link: 'Home',
				tab: 'Home tab'
			},
			{
				id: 'tab2',
				link: 'Products',
				tab: 'Products tab'
			},
			{
				id: 'tab3',
				link: 'About',
				tab: 'About tab'
			}
		]
	};

	switchTabs(id, e) {
		e.preventDefault();
		this.setState({
			active: id
		});
	};

	render() {
		return (
			<div className="wrapper">
				<Tabset
					state={this.state}
					switchTabs={(id, e) => this.switchTabs(id, e)} />
				<TabContent
					state={this.state}
					switchTabs={(id, e) => this.switchTabs(id, e)} />
			</div>
		)
	}
}

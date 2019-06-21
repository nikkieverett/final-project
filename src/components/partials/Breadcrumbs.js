import React from 'react';
import { store } from '../../store/store';

class Breadcrumbs extends React.Component {
	constructor() {
		super();
		this.state = store.getState();
	}
	componentDidMount() {
		this.unsub = store.subscribe(() => this.setState(store.getState()));
	}
	componentWillUnmount() {
		this.unsub();
	}
	renderBreadCrumbs() {
		let breadcrumbsState = this.state.query.breadcrumbs;
		let breadCrumbElement = '';

		if (breadcrumbsState.length) {
			breadcrumbsState.forEach((crumb) => {
				 breadCrumbElement += `<span>${ crumb }</span>`
			})
		}

		return breadCrumbElement;
	}
	render() {
		return (
			<div className="breadcrumbs" dangerouslySetInnerHTML={{ __html: this.renderBreadCrumbs() }}></div>
		)
	}
}

module.exports = Breadcrumbs;

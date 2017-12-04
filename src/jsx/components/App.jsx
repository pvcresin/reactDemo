import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import autobind from 'autobind-decorator'
import styles from './App.css'

export default class App extends Component {
	constructor() {
		super()
		this.state = {
			count: 0,
			text: '',
			list: []
		}
	}
	@autobind
	countUp() {
		this.setState({ count: this.state.count + 1 })
	}
	@autobind
	onChange(e) {
		this.setState({ text: e.currentTarget.value })
	}
	@autobind
	keyDown(e) {
		if (e.keyCode === 13) {
			const list = this.state.list
			list.push(this.state.text)
			this.setState({ text: '', list: list })
		}
	}
	render() {
		const list = this.state.list.map((memo, i) => {
			return (
				<li key={i}>{memo}</li>
			)
		})
		return (
			<div className={styles.base}>
				<h1>App</h1>
				<div>
					<span>count: {this.state.count}</span>
					<button onClick={this.countUp}>Click Me!</button>
				</div>
				<div>
					<input type="text"
						onChange={this.onChange}
						onKeyDown={this.keyDown}
						value={this.state.text} />
					<ul>{list}</ul>
				</div>
			</div>
		)
	}
}
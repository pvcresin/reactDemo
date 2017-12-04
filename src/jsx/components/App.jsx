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
	updateText(e) {
		this.setState({ text: e.currentTarget.value })
	}
	@autobind
	addMemo() {
		const list = this.state.list
		list.push(this.state.text)
		this.setState({ text: '', list: list })
	}
	render() {
		const list = this.state.list.map(l => {
			return (
				<li>{l}</li>
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
					<input type="text" onChange={this.updateText} value={this.state.text} />
					<button onClick={this.addMemo}> add</button>
					<ul>{list}</ul>
				</div>
			</div>
		)
	}
}
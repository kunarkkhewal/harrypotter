import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			spells: [],
			characters: [],
			houses: [],
			house: '',
			superhero: []
		}
	}

	onClickSorting = () => {
		axios.get(`https://www.potterapi.com/v1/sortingHat`)
			.then(res => {
				console.log("*************************", res.data)
				const house = res.data;
				this.setState({ house });
			})
	}

	onClickCharacter = () => {
		axios.get(`https://www.potterapi.com/v1/characters?key=$2a$10$GZYzlvwFvGcCl506gAGr0uYOZcBgc.1K.DcAOuI7dnWnXCqB988zO`)
			.then(res => {
				const characters = res.data;
				this.setState({ characters });
			})
	}

	onClickSpell = () => {
		axios.get(`https://www.potterapi.com/v1/spells?key=$2a$10$GZYzlvwFvGcCl506gAGr0uYOZcBgc.1K.DcAOuI7dnWnXCqB988zO`)
			.then(res => {
				const spells = res.data;
				this.setState({ spells });
			})
	}

	onClickHouse = () => {
		axios.get(`https://www.potterapi.com/v1/houses?key=$2a$10$GZYzlvwFvGcCl506gAGr0uYOZcBgc.1K.DcAOuI7dnWnXCqB988zO`)
			.then(res => {
				const houses = res.data;
				this.setState({ houses });
			})
	}

	render() {
		return (
			<div className="App">
				<div className={this.state.house} ></div>
				<h2>Kunark Khewal</h2>
				<h4>presents</h4>
				<h1>Pottermore quiz</h1>

				<button onClick={this.onClickSorting}>Find your house</button>
				<h2>Your house is {this.state.house}</h2>

				<button onClick={this.onClickSpell}>Find all spells</button>
				<ul>
					{this.state.spells.map((spell, index) => {
						return <li key={index}>{spell.spell}{console.log("***********", spell)}</li>
					})}
				</ul>

				<button onClick={this.onClickCharacter}>Find all characters</button>
				<ul>
					{this.state.characters.map((character, index) => {
						return <li key={index}>{character.name}{console.log("-----------", character)}</li>
					})}
				</ul>

				<button onClick={this.onClickHouse}>Find all houses</button>
				<ul>
					{this.state.houses.map((house, index) => {
						return <li key={index}>{house.name}{console.log("++++++++++++", house)}</li>
					})}
				</ul>

			</div>
		);
	}
}

export default App;

import React from 'react';

class App extends React.Component {
	/*constructor*/
	constructor() {
		super();
		this.state = {
			data: [
			{
				"id":1,
				"name":"Sachin",
				"age":28
			},
			{
				"id":2,
				"name":"Raju",
				"age":27
			},
			{
				"id":3,
				"name":"DataBoy",
				"age":25
			}
			]
		}
	}
	render(){
		return (
			<div>
				<Header/>
				<table>
					<tbody>
					{ this.state.data.map((person, i) => <TableRow key = {i} data={person} />) }
					</tbody>
				</table>
			</div>
		);
	}
}

class Header extends React.Component {
	render(){
		var myStyle={
			fontSize: 100,
			color: '#ff0000'
		};
		return (
			<div>
				<h2 style = {myStyle} >Hello World!</h2>
			</div>
		);
	}
}
class TableRow extends React.Component {
	render() {
		return (
			<tr>
				<td data-custom-attrib="someval">{this.props.data.id}</td>
				<td>{this.props.data.name}</td>
				<td>{this.props.data.age}</td>
			</tr>
		);
	}
}
export default App;
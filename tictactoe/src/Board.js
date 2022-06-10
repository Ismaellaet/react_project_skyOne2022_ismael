import React from "react";
import Square from "./Square";

export default class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
			xIsNext: true,
		};
	}

	getSquareValue() {
		return this.state.xIsNext ? "X" : "O";
	}

	render() {
		const squareValue = this.getSquareValue();
		const status = `Next player: ${squareValue}`;

		return (
			<div>
				<div className="status">{status}</div>

				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>

				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>

				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}

	renderSquare(i) {
		return (
			<Square
				value={this.state.squares[i]} // Render square value
				onClick={() => this.handleClick(i)}
			/>
		);
	}

	handleClick(i) {
		const squares = this.state.squares;

		squares[i] = this.getSquareValue(); // Set square value

		this.setState({
			squares,
			xIsNext: !this.state.xIsNext,
		});
	}
}

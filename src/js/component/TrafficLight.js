import React from "react";
export class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			activeLight: null
		};
	}

	render() {
		let redExtraClass = this.state.activeLight == "red" ? "selected" : null;
		let yellowExtraClass =
			this.state.activeLight == "yellow" ? "selected" : null;
		let greenExtraClass =
			this.state.activeLight == "green" ? "selected" : null;

		return (
			<div>
				<div id="trafficTop"></div>
				<div id="container">
					<div
						className={"red light " + redExtraClass}
						onClick={() =>
							this.setState({ activeLight: "red" })
						}></div>

					<div
						className={"yellow light " + yellowExtraClass}
						onClick={() =>
							this.setState({ activeLight: "yellow" })
						}></div>

					<div
						className={"green light " + greenExtraClass}
						onClick={() =>
							this.setState({ activeLight: "green" })
						}></div>
				</div>
			</div>
		);
	}
}

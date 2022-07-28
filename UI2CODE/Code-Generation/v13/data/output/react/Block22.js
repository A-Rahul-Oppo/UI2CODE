import React from "react";

class Block22 extends React.Component {
	constructor() {
		super();
		this.state = {
			css: {
				block22: {
					clear: "left",
					border: "none",
					height: "10px"
				},
				div6: {
					background: "grey",
					width: "28px",
					height: "10px",
					float: "left"
				},
				t0: {
					width: "26px",
					height: "6px",
					background: "green"
				},
				li5: {
					marginRight: "18px",
					float: "left"
				},
				ul5: {
					float: "left",
					paddingLeft: "17px",
					clear: "none"
				}
			}
		},
			render = () => {
				return (
					<div style={this.state.css.block22}>
						<div style={this.state.css.div6}>
						</div>
						<ul style={this.state.css.ul5}>
							<li style={this.state.css.li5}>
								<div style={this.state.css.t0}>
								</div>
							</li>
							<li style={this.state.css.li5}>
								<div style={this.state.css.t0}>
								</div>
							</li>
							<li style={this.state.css.li5}>
								<div style={this.state.css.t0}>
								</div>
							</li>
							<li style={this.state.css.li5}>
								<div style={this.state.css.t0}>
								</div>
							</li>
							<li style={this.state.css.li5}>
								<div style={this.state.css.t0}>
								</div>
							</li>
							<li style={this.state.css.li5}>
								<div style={this.state.css.t0}>
								</div>
							</li>
							<li style={this.state.css.li5}>
								<div style={this.state.css.t0}>
								</div>
							</li>
						</ul>
					</div>

				);
			};
	}
}

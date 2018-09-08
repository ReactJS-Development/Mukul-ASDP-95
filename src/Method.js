import React, { Component } from 'react';

class Method extends Component {
	constructor() {
		super()
		console.log('This is printed by constructor');
	}

	Build = () => {
		console.log('This is printed by Build Method');
	}

	Run = () => {
		console.log('This is printed by Run Method');
	}

	Script = () => {
		console.log('This is printed by Script Method');
	}	

	render() {
    	return (
      		<div>
      			<button onClick={this.Build}>Build</button><hr/>
      			<button onClick={this.Run}>Run</button><hr/>
      			<button onClick={this.Script}>Script</button><hr/>
	    	</div>
    	);
  	}
}

export default Method;

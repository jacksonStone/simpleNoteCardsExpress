import React from 'react';

class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
      </div>);
  }
}

function factory(){
	return <App></App>;
}
module.exports = factory;
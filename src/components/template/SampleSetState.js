import React from 'react';

class SampleSetState extends React.Component {
   constructor() {
      super();
		
      this.state = {
         data: []
      }
	
      this.setStateHandler = this.setStateHandler.bind(this);
   };
   setStateHandler() {
      var item = "setState..."
      // ambil semua array data tanpa tanpa di potong
      var myArray = this.state.data.slice();
      myArray.push(item);

      // cara set state seperti dibawah ini
      this.setState({data: myArray})
   };
   render() {
      return (
         <div>
            <button onClick = {this.setStateHandler}>SET STATE</button>
            <h4>State Array: {this.state.data}</h4>
         </div>
      );
   }
}
export default SampleSetState;
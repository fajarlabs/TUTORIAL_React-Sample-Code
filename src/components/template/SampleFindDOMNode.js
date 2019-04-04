import React from 'react';
import ReactDOM from 'react-dom';

class SampleFindDOMNode extends React.Component {
   constructor() {
      super();
      this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
   };
   findDomNodeHandler() {
      // Mencari div dan mendapatkan ID selanjutnya
      // merubah style warna textnya menjadi warna merah
      var myDiv = document.getElementById('myDiv');
      ReactDOM.findDOMNode(myDiv).style.color = 'red';
   }
   render() {
      return (
         <div>
            <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
            {
               // komponennya ada dibawah ini
            }
            <div id = "myDiv">NODE</div>
         </div>
      );
   }
}
export default SampleFindDOMNode;
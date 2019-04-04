import React from 'react';

// contoh dibawah ini berkaitan dengan route yang ada di App.js

class SampleWebsite extends React.Component {
   render() {
      return (
         <div>
            {/* <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            </ul>
            {this.props.children} */}
         </div>
      )
   }
}
// sebagai module jika di export tanpa { module } akan mengambil
export default SampleWebsite;

class Dashboard extends React.Component {
   render() {
      return (
         <div>
            <h1>Dashboard...</h1>
         </div>
      )
   }
}

class About extends React.Component {
   render() {
      return (
         <div>
            <h1>About...</h1>
         </div>
      )
   }
}

class Contact extends React.Component {
   render() {
      return (
         <div>
            <h1>Contact...</h1>
         </div>
      )
   }
}

// dibawah ini untuk module didalam import {module1, module2} from xxxx
export {
    Dashboard,
    About,
    Contact,
    SampleWebsite
}
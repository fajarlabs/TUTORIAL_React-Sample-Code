import React from 'react';

// penyebaran attribut / spread attribute
// https://stackoverflow.com/questions/31048953/what-do-these-three-dots-in-react-do


// set object property spread
const person= {
    name: 'Agus',
    age: 35,
    address: 'Jakarta Selatan' 
}

{
    /* 
        <Modal {...person} title='Modal heading' animation={false} />
        <Modal name={person.name} age={person.age} title='Modal heading' animation={false} /> 
    */
}

class SampleSpreadAttributes extends React.Component {
    constructor(props) {
       super(props);
       this.state = {}
       this.func1 = this.func1.bind(this)
       this.func2 = this.func2.bind(this)
       this.arraySpread = this.arraySpread.bind(this);
    };

    componentWillMount() {
        this.func1("a","b","c");
        this.func2("d","e","f","g","h");
        this.arraySpread();
    }

    arraySpread() {
        const parts = ['two', 'three'];
        const numbers = ['one', ...parts, 'four', 'five']; 
        console.log(numbers); // Array(5) [ "one", "two", "three", "four", "five" ]
    }

    func1(...params) {
       console.log(params); // Array(3) [ "a", "b", "c" ]
    }

    func2(param1, param2, ...params) {
        console.log(param1); // d
        console.log(param2); // e
        console.log(params); // Array(3) [ "f", "g", "h" ]
    }

    render() {
       return (
          <div>
              <label>Contoh Spread Operator</label><br />
              <Profile {...person} />
          </div>
       );
    }
 }

 class Profile extends React.Component {
    render() {
        return (
            <div>
                <span>Name : {this.props.name}</span><br />
                <span>Age : {this.props.age}</span><br />
                <span>Address : {this.props.address}</span><br />
            </div>
        );
    }
 }
 export default SampleSpreadAttributes;
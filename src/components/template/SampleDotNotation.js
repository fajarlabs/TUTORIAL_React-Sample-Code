import React, { Component } from 'react';

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

class SampleDotNotation extends Component {
    render() {
        return (
            <MyComponents.DatePicker color="blue" />
        );
    }
}

export default SampleDotNotation;
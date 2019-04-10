import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/**
 * Memasukkan DOM html ke komponen diluar hirarki komponen induk
 * 
 * A Portal can have a shared state with it's parent.
 * Here we have passed the prop variable "parentState"
 * and it will update with the parent.
 */
class ComponentPortal extends Component {
  render() {
    return ReactDOM.createPortal(
        <div className="portal">
            <h1>
                <b>Sample Portal</b><br />
                {`My id or name in PUBG is ${this.props.namepubg} :)`}
            </h1>
        </div>,
        document.getElementById('portal')
    );
  }
}

class SamplePortal extends Component {
    render() {
        return (
            <ComponentPortal namepubg="ytDailyGame" />
        );
    }
}

export default SamplePortal;
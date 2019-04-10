import React from 'react';

class SampleFragment extends React.Component {
    constructor(props) {
       super(props);
       this.state = {}
    };

    render() {
       return (
          <div>
              <table>
                  <tr>
                      <Columns />
                  </tr>
              </table>
          </div>
       );
    }
 }

 class Columns extends React.Component {
    render() {
        {/* tanpa menggunakan <div></div> */}
        return (
            <React.Fragment>
                <td>Kolom1</td>
                <td>Kolom2</td>
                <td>Kolom3</td>
            </React.Fragment>
        );
    }
 }
 export default SampleFragment;
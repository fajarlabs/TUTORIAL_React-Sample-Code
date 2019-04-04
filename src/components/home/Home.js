import React, {Component} from 'react';
import SamplePage from '../template/SampleWebsite'

class Home extends Component{

  render(){
    return (
      // peletakan element diantara <div></div>
      <div>
          <SamplePage />
      </div>
    )
  }
}

export default Home;
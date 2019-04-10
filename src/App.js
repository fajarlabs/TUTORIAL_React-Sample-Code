import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';

import { SampleWebsite, Dashboard, About, Contact} from './components/template/SampleWebsite'
import SampleHOC from './components/template/SampleHOC'
import SampleDataTable from './components/template/SampleDataTable'
import SampleValidation from './components/template/SampleValidation'
import SampleFormRefux from './components/template/SampleFormRedux'
import SampleSubmitValidationFormRedux from './components/template/SampleSubmitValidationFormRedux'
import SampleSpreadAttributes from './components/template/SampleSpreadAttributes'
import SampleFragment from './components/template/SampleFragment'
import SampleAppContext from './components/template/ctx_app_context'
import SamplePortal from './components/template/SamplePortal'

class App extends Component {

  // render() untuk merender DOM. Fungsi inti dari React.
  // fungsi utama dari React. Dipanggil setelah mengeksekusi componentWillMount()
  render() {
    return (
      // contoh membuat route uri di react
      <Router>
          <Route path = "/" component = {SampleWebsite} />
          <Route path = "/dashboard" component = {Dashboard} />
          <Route path = "/about" component = {About} />
          <Route path = "/contact" component = {Contact} />
          <Route path = "/samplehoc" component = {SampleHOC} />
          <Route path = "/datatable" component = {SampleDataTable} />
          <Route path = "/validation" component = {SampleValidation} />
          <Route path = "/reduxform" component = {SampleFormRefux} />
          <Route path = "/validation_redux" component = {SampleSubmitValidationFormRedux} />
          <Route path = "/spread_attributes" component = {SampleSpreadAttributes} />
          <Route path = "/fragment" component = {SampleFragment} />
          <Route path = "/context" component = {SampleAppContext} />
          <Route path = "/portal" component = {SamplePortal} />
      </Router>
    );
  }
}

export default App;

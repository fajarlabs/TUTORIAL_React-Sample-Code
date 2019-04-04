import React, {Component} from 'react';
import axios from 'axios';
import { Modal  } from 'react-bootstrap';

class SampleDataTable extends Component{

  constructor(props) {
    super(props)
    this.state = {
      rows: [],
      limit : 5,
      offset : 0,
      page : 1,
      disable_preview : '',
      disable_next : '',
      modal_show: false,
      search : {
        office : '',
        address : '',
        city : '',
        province : '',
        postal_code : ''
      }
    }
    this.reload = this.reload.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.handleChangeOffice = this.handleChangeOffice.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeProvince = this.handleChangeProvince.bind(this);
    this.handleChangePostalCode = this.handleChangePostalCode.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  componentWillMount() {
    this.next();
  }

  changePage(event) {
    this.setState({
      limit : event.target.value
    });
    this.reload(event.target.value);
  }

  handleChangeOffice(event) {
    this.setState({
      search : {
        ...this.state.search,
        office : event.target.value
      },
    });
  }

  handleChangeAddress(event) {
    this.setState({
      search : {
        ...this.state.search,
        address : event.target.value
      },
    });
  }

  handleChangeCity(event) {
    this.setState({
      search : {
        ...this.state.search,
        city : event.target.value
      },
    });
  }

  handleChangeProvince(event) {
    this.setState({
      search : {
        ...this.state.search,
        province : event.target.value
      },
    });  
  }

  handleChangePostalCode(event) {
    this.setState({
      search : {
        ...this.state.search,
        postal_code : event.target.value
      },
    }); 
  }

  previous() {
    let _offset = this.state.offset -  this.state.limit;
    this.setState({modal_show: true});

    const _next = this;
    const rows = [];
    const config = {
      headers: { 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEiLCJ1c2VyX25hbWUiOiJhZG1pbiJ9.bU9XyCeWf6NRwiI2bWVtwS9Qdx3bOg2GkdrsLB2dzqI' },
    };
    const bodyParameters = {
      key: 'value',
    };

    axios.post(
      `http://localhost/Orgoffice/getAllItem/${this.state.limit}/${_offset}`,
      bodyParameters,
      config,
    ).then((response) => {
      if(response.data.data.length > 0) {
          let _no = _offset;
          for (let i = 0; i < response.data.data.length; i += 1 ) {
            _no = _no + 1;
            rows.push({
              no : _no,
              office: response.data.data[i].office,
              address: response.data.data[i].address,
              city: response.data.data[i].city,
              province: response.data.data[i].province,
              postal_code: response.data.data[i].postal_code,
            });
          }

          if((_offset) < 1) {
            this.setState({disable_next: ''});
            this.setState({disable_preview: 'disabled'});
          } else {
            this.setState({disable_next: ''});
          }

          // simpan state limit offset
          _next.setState({ 
            rows,
            page : this.state.page - 1,
            offset : _offset,
            modal_show: false
          });
      } else {
        // sembunyikan modal loading data jika data kosong
        this.setState({modal_show: false});
      }
    }).catch((error) => {
      // sembunyikan modal loading data
      this.setState({modal_show: false});
      console.log(error);
    });
  }

  reload(limit) {
    const _reload = this;
    let _offset = this.state.offset;
    this.setState({modal_show: true});
    const rows = [];
    const config = {
      headers: { 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEiLCJ1c2VyX25hbWUiOiJhZG1pbiJ9.bU9XyCeWf6NRwiI2bWVtwS9Qdx3bOg2GkdrsLB2dzqI' },
    };
    const bodyParameters = {
      key: 'value',
    };
    axios.post(
      `http://localhost/Orgoffice/getAllItem/${limit}/${_offset}`,
      bodyParameters,
      config,
    ).then((response) => {
      this.setState({modal_show: false});
      if(response.data.data.length > 0) {
          let _no = _offset;
          for (let i = 0; i < response.data.data.length; i += 1 ) {
            _no = _no + 1;
            rows.push({
              no : _no,
              office: response.data.data[i].office,
              address: response.data.data[i].address,
              city: response.data.data[i].city,
              province: response.data.data[i].province,
              postal_code: response.data.data[i].postal_code,
            });
          }
          _reload.setState({ 
            rows
          });
      }
    }).catch((error) => {
      this.setState({modal_show: false});
      console.log(error);
    });
  }

  next() {
    let _offset = (this.state.page - 1) * this.state.limit;
    this.setState({modal_show: true});
    const _next = this;
    const rows = [];
    const config = {
      headers: { 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEiLCJ1c2VyX25hbWUiOiJhZG1pbiJ9.bU9XyCeWf6NRwiI2bWVtwS9Qdx3bOg2GkdrsLB2dzqI' },
    };
    const bodyParameters = {
      key: 'value',
    };
    axios.post(
      `http://localhost/Orgoffice/getAllItem/${this.state.limit}/${_offset}`,
      bodyParameters,
      config,
    ).then((response) => {
      if(response.data.data.length > 0) {
          let _no = _offset;
          for (let i = 0; i < response.data.data.length; i += 1 ) {
            _no = _no + 1;
            rows.push({
              no : _no,
              office: response.data.data[i].office,
              address: response.data.data[i].address,
              city: response.data.data[i].city,
              province: response.data.data[i].province,
              postal_code: response.data.data[i].postal_code,
            });
          }

          if(_offset < 1) {
            this.setState({disable_preview: 'disabled'});
            this.setState({disable_next: ''});
          } else {
            this.setState({disable_preview: ''});
          }

          _next.setState({ 
            rows,
            page : this.state.page + 1,
            offset : _offset,
            modal_show: false
          });
      } else {
        this.setState({modal_show: false, disable_next: 'disabled'});
      }
    }).catch((error) => {
      this.setState({modal_show: false});
      console.log(error);
    });
  }

  renderRow(props) {
    return (
      <tr>
        <td>{ props.no }</td>
        <td>{ props.office }</td>
        <td>{ props.address }</td>
        <td>{ props.city }</td>
        <td>{ props.province }</td>
        <td>{ props.postal_code }</td>
      </tr>
    );
  }

  render(){
    return (
      // peletakan element
      <div>
        <br />
        <Modal show={this.state.modal_show} >
          <Modal.Body>
          Currently retrieving data from the server...
          </Modal.Body>
        </Modal>
          <div class="form-group row">
            <label class="col-sm-1 col-form-label">Page :</label>
            <div class="col-sm-2">
              <select onChange={this.changePage} class="form-control">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
              </select>
            </div>
          </div>
        <table class="table">
          <thead>
            <tr>
              <th>NO</th>
              <th>OFFICE</th>
              <th>ADDRESS</th>
              <th>CITY</th>
              <th>PROVINCE</th>
              <th>POSTAL CODE</th>
            </tr>
            <tr>
              <td>#</td>
              <td><input type="text" value={this.state.search.office} onChange={this.handleChangeOffice} class="form-control" /></td>
              <td><input type="text" value={this.state.search.address} onChange={this.handleChangeAddress} class="form-control" /></td>
              <td><input type="text" value={this.state.search.city} onChange={this.handleChangeCity} class="form-control" /></td>
              <td><input type="text" value={this.state.search.province} onChange={this.handleChangeProvince} class="form-control" /></td>
              <td><input type="text" value={this.state.search.postal_code} onChange={this.handleChangePostalCode} class="form-control" /></td>
            </tr>
          </thead>
          <tbody>
          { this.state.rows.map(this.renderRow) }
          </tbody>
        </table>
        <div class="d-flex justify-content-center">
          <nav aria-label="...">
              <ul class="pagination">
                <li class={"page-item " + this.state.disable_preview}>
                  <a onClick={this.previous} class="disabled page-link" href="#" tabindex="-1" aria-disabled="true"><i class="fa fa-arrow-left"></i> Previous</a>
                </li>
                <li class={"page-item " + this.state.disable_next}>
                  <a onClick={this.next} class="page-link" href="#">Next <i class="fa fa-arrow-right"></i></a>
                </li>
              </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default SampleDataTable;
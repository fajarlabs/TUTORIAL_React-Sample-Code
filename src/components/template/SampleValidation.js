import React from 'react';
import { Textbox, Checkbox } from 'react-inputs-validation';
import ReactDOM from "react-dom";

// https://github.com/edwardfhsiao/react-inputs-validation/blob/gh-pages/example/index.js
// https://edwardfhsiao.github.io/react-inputs-validation/

class SampleValidation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            alamat: '',
            alamatKantor: '',
            telphon: '',
            agreement: '',
            hasAlamat: true,
            hasAlamatKantor: true,
            hasTelphon: true,
            triggerValidate: false,
            isAgreementChecked: false
        }
        this.validateForm.bind(this);
    };

    componentDidMount() {

        // metode I, cara select option menggunakan ReactDOM
        // const node = ReactDOM.findDOMNode(this);
        // if (node instanceof HTMLElement) {
        //     const child = node.querySelector('#contohSelect')
        //     child.value = "Bandung";
        // }
        
        // metode II, cara select value menggunakan ref
        // lebih simpel penggunaanya
        this.refs.kota.value = "Bandung";
    }

    validateForm = (e) => {
        e.preventDefault();
        this.setState({
            triggerValidate: true
        })
    }

    render() {
        return (
            <div className="container">
                <br />
                <div class="row">
                    <div class="col-md-12">
                        <form onSubmit={this.validateForm}>
                            <div className="row">
                                <div className="col-md-4">
                                    <div class="form-group">
                                        <span class="badge badge-success">Contoh penggunaan required / wajib di isi</span>
                                        <Textbox
                                            classNameInput="form-control"
                                            tabIndex="1"
                                            id={'Name'}
                                            name="Name"
                                            type="text"
                                            value={this.state.alamat}
                                            disabled={false}
                                            validate={this.state.triggerValidate} // jika true maka akan memeriksa validasi input
                                            placeholder="Alamat rumah..."
                                            customStyleInput={{ width: '300px' }}
                                            onChange={(alamat, e) => {
                                                this.setState({ alamat });
                                                // console.log(e);
                                            }}
                                            validationCallback={res =>
                                                this.setState({ hasAlamat: res })
                                            }
                                            onBlur={e => {
                                                console.log(e);
                                            }}
                                            validationOption={{
                                                name: 'Name',
                                                check: true,
                                                required: true,
                                                showMsg: true,
                                                msgOnError: <span style={{ color: 'red' }}>Wajib isi alamat rumah</span>
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                <div class="form-group">
                                        <span class="badge badge-success">Contoh semua huruf besar</span>
                                        <Textbox
                                            classNameInput="form-control"
                                            tabIndex="1"
                                            id={'Name'}
                                            name="Name"
                                            type="text"
                                            value={this.state.alamat}
                                            disabled={false}
                                            validate={this.state.triggerValidate} // jika true maka akan memeriksa validasi input
                                            placeholder="Input kata / kalimat..."
                                            customStyleInput={{ width: '300px' }}
                                            onChange={(alamat, e) => {
                                                this.setState({ alamat });
                                                // console.log(e);
                                            }}
                                            validationCallback={res =>
                                                this.setState({ hasAlamat: res })
                                            }
                                            onBlur={e => {
                                                console.log(e);
                                            }}
                                            validationOption={{
                                                name: 'Name',
                                                check: true,
                                                required: true,
                                                showMsg: true,
                                                msgOnError: <span style={{ color: 'red' }}>Wajib isi alamat rumah</span>
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                <div class="form-group">
                                        <span class="badge badge-success">Contoh hapus whitespace / spasi</span>
                                        <Textbox
                                            classNameInput="form-control"
                                            tabIndex="1"
                                            id={'Name'}
                                            name="Name"
                                            type="text"
                                            value={this.state.alamat}
                                            disabled={false}
                                            validate={this.state.triggerValidate} // jika true maka akan memeriksa validasi input
                                            placeholder="Input kata / kalimat..."
                                            customStyleInput={{ width: '300px' }}
                                            onChange={(alamat, e) => {
                                                this.setState({ alamat });
                                                // console.log(e);
                                            }}
                                            validationCallback={res =>
                                                this.setState({ hasAlamat: res })
                                            }
                                            onBlur={e => {
                                                console.log(e);
                                            }}
                                            validationOption={{
                                                name: 'Name',
                                                check: true,
                                                required: true,
                                                showMsg: true,
                                                msgOnError: <span style={{ color: 'red' }}>Wajib isi alamat rumah</span>
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                    <span class="badge badge-success">Contoh penggunaan MIN & MAX / wajib di isi</span>
                                    <Textbox
                                        classNameInput="form-control"
                                        tabIndex="1"
                                        id={'AlamatKantor'}
                                        name="AlamatKantor"
                                        type="text"
                                        value={this.state.alamatKantor}
                                        disabled={false}
                                        validate={this.state.triggerValidate} // jika true maka akan memeriksa validasi input
                                        placeholder="ex. Jl. Gatot Subroto No.4"
                                        customStyleInput={{ width: '300px' }}
                                        onChange={(alamatKantor, e) => {
                                            this.setState({ alamatKantor });
                                            // console.log(e);
                                        }}
                                        validationCallback={res =>
                                            this.setState({ hasAlamatKantor: res })
                                        }
                                        onBlur={e => {
                                            console.log(e);
                                        }}
                                        validationOption={{
                                            name: 'Name',
                                            check: true,
                                            required: true,
                                            showMsg: true,
                                            min: 2,
                                            max: 10,
                                            msgOnError: <span style={{ color: 'red' }}>Minimal 2 sampai 10 karakter</span>
                                        }}
                                    />
                                </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <span class="badge badge-success">Contoh input hanya boleh angka</span>
                                        <Textbox
                                            classNameInput="form-control"
                                            tabIndex="1"
                                            id={'AlamatKantor'}
                                            name="AlamatKantor"
                                            type="text"
                                            value={this.state.alamatKantor}
                                            disabled={false}
                                            validate={this.state.triggerValidate} // jika true maka akan memeriksa validasi input
                                            placeholder="Input kata..."
                                            customStyleInput={{ width: '300px' }}
                                            onChange={(alamatKantor, e) => {
                                                this.setState({ alamatKantor });
                                                // console.log(e);
                                            }}
                                            validationCallback={res =>
                                                this.setState({ hasAlamatKantor: res })
                                            }
                                            onBlur={e => {
                                                console.log(e);
                                            }}
                                            validationOption={{
                                                name: 'Name',
                                                check: true,
                                                required: true,
                                                showMsg: true,
                                                min: 2,
                                                max: 10,
                                                msgOnError: <span style={{ color: 'red' }}>Minimal 2 sampai 10 karakter</span>
                                            }}
                                        />
                                    </div>
                                </div>
                                <div class="col-md-4">
                                <div class="form-group">
                                    <span class="badge badge-success">Contoh hanya untuk input email</span>
                                    <Textbox
                                        classNameInput="form-control"
                                        tabIndex="1"
                                        id={'AlamatKantor'}
                                        name="AlamatKantor"
                                        type="email"
                                        value={this.state.alamatKantor}
                                        disabled={false}
                                        validate={this.state.triggerValidate} // jika true maka akan memeriksa validasi input
                                        placeholder="ex. admin@gmail.com"
                                        customStyleInput={{ width: '300px' }}
                                        onChange={(alamatKantor, e) => {
                                            this.setState({ alamatKantor });
                                            // console.log(e);
                                        }}
                                        validationCallback={res =>
                                            this.setState({ hasAlamatKantor: res })
                                        }
                                        onBlur={e => {
                                            console.log(e);
                                        }}
                                        validationOption={{
                                            name: 'Name',
                                            check: true,
                                            required: true,
                                            showMsg: true,
                                            min: 2,
                                            max: 10,
                                            msgOnError: <span style={{ color: 'red' }}>Minimal 2 sampai 10 karakter</span>
                                        }}
                                    />
                                </div>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <span class="badge badge-success">Contoh regex nomor telphon indonesia</span>
                                <Textbox
                                    classNameInput="form-control"
                                    tabIndex="1"
                                    id={'Telphon'}
                                    name="Telphon"
                                    type="text"
                                    value={this.state.telphon}
                                    disabled={false}
                                    validate={this.state.triggerValidate} // jika true maka akan memeriksa validasi input
                                    placeholder="ex. 08xxxxxxxxxx"
                                    customStyleInput={{ width: '300px' }}
                                    onChange={(telphon, e) => {
                                        this.setState({ telphon });
                                        // console.log(e);
                                    }}
                                    validationCallback={res =>
                                        this.setState({ hasTelphon: res })
                                    }
                                    onBlur={e => {
                                        console.log(e);
                                    }}
                                    validationOption={{
                                        name: 'Telphon',
                                        check: true,
                                        required: true,
                                        showMsg: true,
                                        reg: /^08\d{9,10}$/,
                                        msgOnError: <span style={{ color: 'red' }}>Format nomor telphon indonesia</span>
                                    }}
                                />
                            </div>
                            <div class="form-group">
                                <span class="badge badge-success">Contoh penggunaan select option required</span>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck" name="example1" />
                                    <label class="custom-control-label" for="customCheck">Wajib di check</label>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="badge badge-success" for="contohSelect">Contoh Select</label>
                                <select name="kota" ref="kota" style={{width:'300px'}} className="form-control" id="contohSelect">
                                    <option>Jakarta</option>
                                    <option>Bandung</option>
                                    <option>Sumatera</option>
                                    <option>Kalimantan</option>
                                    <option>Sulawesi</option>
                                </select>
                            </div>
                            <input className="btn btn-sm btn-success" value="Submit" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default SampleValidation;
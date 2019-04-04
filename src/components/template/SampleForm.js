import React, {Component} from 'react';
import { connect,ReactReduxContext  } from 'react-redux'
import { addTodo  } from '../redux/actions'

class SampleForm extends Component{

    // constructor adalah method yang pertamakali di eksekusi ketika object dibuat
    constructor(props) {
        super(props);
        // mengeset state
        this.state = {
            name: '',
            greeting: `Say ${this.props.kata_awal}, `,
            input : ''
        }
        // lakukan binding agar, fungsi bisa menggunakan variable this
        this.onChange = this.onChange.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.updateInput = this.updateInput.bind(this);
    }

    updateInput(e) {
        this.setState({ input: e });
    }

    handleAddTodo = () => {
        // dispatches actions to add todo
        // maksudnya adalah memasukkan ke store
        this.props.addTodo(this.state.input)
    
        // kosongkan state input
        this.setState({ input: '' })
      }

    // fungsi ketika ada event onchange
    onChange(e) {
        // ketika memanggil set state maka didengarkan juga oleh ReactReduxContext.Consumer
        this.setState({
            name: e.target.value
        })
    }
    // fungsi utama untuk merender html
    render() {
        return (
            // harus diapit dengan <div>komponent</div>
            <div>
                <ReactReduxContext.Consumer>
                {({ store }) => {
                    // do something with the store here
                    console.log('listen : ');
                    console.log(store.getState().todos);
                }}
                </ReactReduxContext.Consumer>
                <input
                onChange={e => this.updateInput(e.target.value)}
                value={this.state.input}
                />
                <button className="add-todo" onClick={this.handleAddTodo}>
                    Add Todo
                </button>
                <section className="section">
                    <label className="label">Input Kata : </label> &nbsp;
                    <input className="input form-control" name="name" placeholder="Ketikkan kata-kata..." onChange={this.onChange} />
                </section>
                <section className="section">
                    <p>{this.state.greeting} {this.state.name}</p>
                </section>
            </div>
        )
    }
}

// harus gunakan connect, tanpa connect maka
// this.props.addTodo akan error
export default connect(
    null,
    { addTodo }
  )(SampleForm)
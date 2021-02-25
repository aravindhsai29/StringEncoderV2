import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
//import http from './http-common.js';
class  App extends Component {
    constructor()
    {
        super()
        this.state = {
            Stringval:''
        }
        this.changeStringval = this.changeStringval.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeStringval(event)
    {
        this.setState({
            Stringval:event.target.value
        })
    }
    onSubmit(event)
    {
        event.preventDefault()
        const Encode = {
            Stringval : this.state.Stringval
        }
       // var url = "\""+this.state.Stringval+"\"";
        //let input1 = JSON.stringify(Encode)
        //http.get(`${this.state.Stringval}`)
       // .then(response => console.log(response.data))
       //var url1 = "https://cors-anywhere.herokuapp.com/http://localhost:8080/encode"
        //var end = `url1/"${this.state.Stringval}"`
        //axios.get(end)
        //.then(response=> console.log(response.data))
        axios.get(`https://cors-anywhere.herokuapp.com/http://localhost:8080/encode/${this.state.Stringval}`,Encode)
        .then(response => console.log(response.data))

        this.setState({
            Stringval:''
        })
    }
    render() { 
        return (  
            <div>
                <h1> Encoder App </h1>
                <div className='container'>
                    <div className='form-div'>
                        <form onSubmit={this.onSubmit}>
                            <input type ='text'
                            placeholder='Enter the String'
                            onChange={this.changeStringval}
                            value = {this.state.Stringval}
                            className='form-control form-group'/>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default App;
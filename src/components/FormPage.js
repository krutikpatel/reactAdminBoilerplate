import React, { Component } from 'react'
import axios from 'axios';

export default class FormPage extends Component {

    state = {
        /*
        knote: using controller elements. Data for elem will be stored in state, via each input's onChange() callback.
            -that is different than tradition form submit, where we fetch value upon formSubmit , directly from form-elements/DOM.
        */
        formData : {
            userid:1,
            id:1,
            title:"",
            body:""
        },
        error: false
    }

    /*Form handlers
        -TODO: how to show modals/alerts for success/failure ?
            -Also validations
        knote : with arrow function, we dont have to "bind" this with funtion
    */
    onFormSubmit = (event) => {
        event.preventDefault();//knote: good to have
        //console.log(this.state.formData);

        //make post request
        axios.post( 'https://jsonplaceholder.typicode.com/posts',  this.state.formData)
            .then( response => {                
                console.log( response );
                alert("Sent");
            } )
            .catch( error => {
                console.log( error );
                this.setState({error: true});
            } );
    }

    onEmailChange = (event) => {
        //console.log(event.target.value);
        const formDataCopy = {
            ...this.state.formData
        };
        formDataCopy.email =  event.target.value;

        this.setState({
            formData : formDataCopy
        })
    }

    render() {
        return (
            <div>
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                        <h1>Blank Page</h1>
                        </div>
                        <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active">Blank Page</li>
                        </ol>
                        </div>
                    </div>
                    </div>{/* /.container-fluid */}
                </section>

                {/* Main content */}
                <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Form Sample</h3>
                                </div>
                                {/* /.card-header */}

                               
                                <form role="form">
                                <div className="card-body">
                                    <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" onChange ={this.onEmailChange} id="exampleInputEmail1" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="exampleInputTitle">Post Title</label>
                                    <input type="password" className="form-control" onChange ={this.onTitleChange} id="exampleInputTitle" placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                    <label>Post Body</label>
                                    <textarea className="form-control" onChange ={this.onBodyChange} rows={3} placeholder="Enter ..." defaultValue={""} />
                                    </div>

                                    <div className="form-group">
                                    <label htmlFor="exampleInputFile">File input</label>
                                    <div className="input-group">
                                        <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="exampleInputFile" />
                                        <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
                                        </div>
                                        <div className="input-group-append">
                                        <span className="input-group-text" id>Upload</span>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                    </div>
                                </div>
                                {/* /.card-body */}
                                <div className="card-footer">
                                    <button type="submit" onClick={this.onFormSubmit} className="btn btn-primary">Submit</button>
                                </div>
                                </form>

                            </div>
                            {/* /.card */}
                        </div>
                    </div>
                </div>
                </section>
            </div>
        )
    }
}

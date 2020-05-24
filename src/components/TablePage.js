import React, { Component } from 'react'
import axios from 'axios';

/*
-maintain table data in state
-when component loads, get data from server
-show it in table..

Lets say this is users table
*/
export default class TablePage extends Component {

    state = {
        todos: [],
        error: false
    }

    componentDidMount () {
        console.log( this.props );
        axios.get( 'https://jsonplaceholder.typicode.com/todos' )
            .then( response => {
                const todos = response.data.slice( 0, 5 );
                /*
                note: use this if we want to add/remove some field to all todos objects

                const updatedTodos = todos.map( todo => {
                    return {
                        ...todo,
                        author: 'Max'
                    }
                } );
                this.setState( { posts: updatedPosts } );
                */
                this.setState( { todos: todos } );
                //console.log( response );
            } )
            .catch( error => {
                console.log( error );
                this.setState({error: true});
            } );
    }

    getCompleted(todo) {
        if(todo.completed)
            return "Yes";
        else
            return "No";
    }
     
    render() {
        /* knote: we can define helper functions insider render() too. But, that would be as following. 
                -I think better option is to define these functions outside render()
        let getCompleted = function(todo) {
            if(todo.completed)
            return "Yes";
        else
            return "No";
        }
        */

        /*
        note: dynamic rendering/population of table rows
        */
        let todos = <p style={{ textAlign: 'center' }}>Something went wrong while getting Todos from server!</p>;
        if ( !this.state.error ) {
            
            todos = this.state.todos.map( todo => {
                /*
                Return html
                */                
                return (
                    /* knote: dynamically generated repetetive elems need unique key*/
                    <tr key={todo.id}>
                        <th scope="row">{todo.id}</th>
                        <td>{todo.userId}</td>
                        <td>{todo.title}</td>
                        <td>{this.getCompleted(todo) }</td>
                    </tr>
                );
            } );
        }   

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

                {/* table */}
                {/* Main content */}
                <section className="content">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-12">
                        <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Todos DataTable with minimal features &amp; hover style</h3>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                            <div>
                                <table className="table table-hover">
                                    <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">User Id</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Completed</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {todos}
                                    </tbody>
                                </table>                    
                            </div>
                        </div>
                        {/* /.card-body */}
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

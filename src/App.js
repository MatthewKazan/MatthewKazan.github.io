import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar, Typography} from "@material-ui/core";
import NavBar from './navbar.js'
import Posts from './posts.js'
import Content from './content.js'


class App extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            view: "home"
        }
    }
    render() {
        return (
            <div>
                <NavBar onClick={i => this.handleClick(i)}/>
                <Content view={this.state.view}
                         onClick={i => this.handleClick(i)}/>
            </div>
        );
    }
  handleClick(i) {
        if (i === "sign in") {

        }
        if (this.state.view !== i) {
            console.log(this.state.view)
            console.log(i)

            this.setState({view: i});
        }
  }
}
export default App;
import Posts from './posts.js'
import Home from './home.js'
import Graph from './graph.js'
import {posts} from './dummy-posts'

import React, { Component } from 'react';

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.view)
        for (let i = 0; i < 6; ++i) {
            console.log(posts.values().next().value.title)
            if (posts.values().next().value.title === this.props.view) {
                return <Graph />
            }
        }


        switch (this.props.view) {
            case "home":
                return <Home />
            case "posts":
                return <Posts onClick={i => this.props.onClick(i)}/>
            default:
                return <Posts onClick={i => this.props.onClick(i)}/>
        }
    }
}

export default Content
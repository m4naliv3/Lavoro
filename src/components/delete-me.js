import React, { Component } from 'react';

export default class DeleteMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            greeting: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
    this.setState({ name: event.target.value });
    }

    handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
        .then(response => response.json())
        .then(state => this.setState(state));
    }

    render() {
        return(
            <div>Thing</div>
        );
    }
};
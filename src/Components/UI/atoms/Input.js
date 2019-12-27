import React from "react";

const inputStyles = {
    margin: "0 0.5rem 0 0",
    borderRadius: "6px",
    border: "0",
    
    padding: "1rem 1.5rem",
    fontSize: "120%"
}

class Input extends React.Component {
    constructor() {
        super();
        this.state = {
            animeTitle: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { value } = event;
        this.setState({ animeTitle: value });
    }

    componentDidMount(){
        
    }
    render(){
        return (
            <input type={this.props.type} style={inputStyles} placeholder={this.props.placeholder ? this.props.placeholder : ""} value={this.props.value} onChange={this.props.onChange} />
        );
    }
        
    

}

export default Input;

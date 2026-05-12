import { Component } from "react";

class Child extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name
        }
    };

    componentDidMount() {
        console.log("Component Mounted");
    }

    componentDidUpdate() {
        console.log("component Update");

    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    };

    handleSubmit = () => {
        console.log(this.state.name);
    };

    render() {
        return (
            <>
                <h2>Hello {this.state.name}</h2>
                <input type="text" value={this.state.name} onChange={this.handleChange} />
                <button type="button" onClick={this.handleSubmit} >Submit</button>
                
            </>
        )
    };
};

export default Child;
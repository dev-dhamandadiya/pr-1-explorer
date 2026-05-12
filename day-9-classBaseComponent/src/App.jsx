import { Component }  from "react";
import Child from "./components/Child.jsx";

class App extends Component{
constructor(props){
super(props)

this.state = {
    count : 0
}
this.handleCounter = this.handleCounter.bind(this)
}


handleCounter () {
this.setState({
    count : this.state.count + 1
})
}

render(){

    return(
    <>
    <h2>count : {this.state.count}</h2>
    <button type="button" onClick={this.handleCounter}>count ++</button>
    <Child name= "Diya"/>
     </>                                                                                                                                                   
    )
}
};

export default App;
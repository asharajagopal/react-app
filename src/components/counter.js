import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        value: this.props.counter.value,
        //tags : ["tag1", "tag2", "tag3"]
     }
     
    //  constructor(){
    //     super();
    //    this.handleIncrement = this.handleIncrement.bind(this.state.count)
    //  }
    render() { 
        return (
            
        <div className="m-2">
            <button onClick={this.handleDecrement} className="btn btn-secondary btn-sm">Decerement</button> 
            <span className={this.generateClasses()}> {this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            <button onClick = {() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">
                Delete
            </button>
            {/* <ul>
               {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul> */}
        </div>
        );
    }
    handleIncrement = () => {
       //console.log("increment button clicked" , this);
       this.setState({value : this.state.value + 1})
    };
     handleDecrement = () => {
         //console.log("increment button clicked" , this);
         this.setState({value : this.state.value - 1})
    };
    generateClasses(){
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes
    };
    formatCount(){
        const {value} = this.state;
        return value === 0 ? "Zero" : value;
    };
}
 
export default Counter;

import React from 'react';

class StatefulGreetingWithCallback extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0
        };
    }

    handleClick(){
        this.setState((prevState, prevProps) => {
            return{
                introduction: prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit"
            }
        })
    }

    increment(){
        this.setState((prevState, prevProps) => {
            return{
                count: prevState.count + 1
            }
        })
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render(){
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <p>Count: {this.state.count}</p>
                <button onClick={() => this.incrementFive()}>Count up 5 times</button>
            </div>
        )
    }
}

export default StatefulGreetingWithCallback
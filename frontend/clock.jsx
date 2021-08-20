import React from "react";

class Clock extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            time: new Date()
        };
        this.tick = this.tick.bind(this);
    }

    tick(){
        this.setState({time: new Date()});
    } 

    componentDidMount(){
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        const hours = this.state.time.getHours();
        const minutes = this.state.time.getMinutes();
        const seconds = this.state.time.getSeconds();
        return (
            <div>
                <p>hours: {hours}</p>
                <p>minutes: {minutes}</p>
                <p>seconds: {seconds}</p>
            </div>
        )
    }
}

export default Clock;
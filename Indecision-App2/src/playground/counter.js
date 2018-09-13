class Counter extends React.Component{

    constructor(props){
        super(props);
        this.counter = -1;
        this.plusOne = this.plusOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0
        }
    }

    render(){
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.plusOne} counter={this.counter}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }

    plusOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    minusOne(){
        this.setState((prevState) => {
            return{
                count: prevState.count - 1
            };
        });
    }
    
    reset(){
        this.setState(() => {
            return {
                count: 0
            };
        });
    }
};

ReactDOM.render(<Counter />, document.getElementById("app"));
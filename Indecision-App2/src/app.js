const onFormSubmit = (e)=>{
    e.preventDefault();//stop refreshing of page
    let input = e.target.elements.option.value;
    console.log(input);

    options.push(input);
    e.target.elements.option.value = '';

}

class IndecisionApp extends React.Component{

    constructor(props){
        super(props);
        this.deleteOptions = this.deleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.addOption = this.addOption.bind(this);
        this.state = {
            options: ['option 1', 'option 2', 'option 3']
        }
    }

    render(){
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer";

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action hasOption={this.state.options.length > 0} handlePick={this.handlePick}/>
                <Options options={this.state.options} deleteOptions={this.deleteOptions}/>
                <AddOption options={this.state.options} addOption={this.addOption}/>
            </div>
        );
    }

    deleteOptions(){
        this.setState(() => {
            return{
                options: []
            };
        });
    }

    handlePick(){
        const random = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[random];
        console.log(option);
    }

    addOption(option){
        if(!option){
            return "Please Enter a Option"
        }else if(this.state.options.indexOf(option) > -1){
            return "This Option Already Exists"
        }

        this.setState((prevState) => {
            return{
                options: prevState.options.concat([option])
            };
        });
        console.log("Indecision App component ");
        console.log(this.state.options);
    }
}

class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>);
    }
};

class Action extends React.Component{
    render(){
        return (
            <div>
                <button onClick={this.props.handlePick} 
                        disabled={!this.props.hasOption}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.deleteOptions}>Remove All</button>
                {this.props.options.map((val) => <Option key={val} optionsText={val}/>)}
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
                {this.props.optionsText}
            </div>
        );
    }
}

class AddOption extends React.Component{

    constructor(props){
        super(props);
        this.addOption = this.addOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    render(){
        return (
            <div>
                <form onSubmit={this.addOption}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }

    addOption(e){
        e.preventDefault();
        const input = e.target.elements.option.value.trim();
        let error = this.props.addOption(input);
        this.setState(() => {
            return {
                error: error
            }
        });

        e.target.elements.option.value = '';
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
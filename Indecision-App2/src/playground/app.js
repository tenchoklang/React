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
        this.deleteOption = this.deleteOption.bind(this);
        this.state = {
            options: []
        }
    }

    componentDidMount(){

        try{
            const loadOptions = JSON.parse(localStorage.getItem("optionsKey"));
            if(loadOptions){
                this.setState(() => ({options:loadOptions}));
            }
        }catch(e){

        }
        console.log("Fetching Data");

    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            console.log("Updating");
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("optionsKey",json);
        }
    }

    componentWillUnmount(){

    }

    render(){
        const subtitle = "Put your life in the hands of a computer";

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action hasOption={this.state.options.length > 0} handlePick={this.handlePick}/>
                <Options options={this.state.options} 
                        deleteOptions={this.deleteOptions}
                        deleteOption={this.deleteOption}/>
                <AddOption options={this.state.options} addOption={this.addOption}/>
            </div>
        );
    }

    deleteOptions(){
        this.setState(() => ({options:[]}));
    }

    deleteOption(optionToRemove){
        const index = this.state.options.indexOf(optionToRemove);
        console.log("DELETE OPTION " + optionToRemove + " " + index);
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option!==optionToRemove)
        }));

    }


    handlePick(){
        const random = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[random];
        alert(option);
    }

    addOption(option){
        if(!option){
            return "Please Enter a Option"
        }else if(this.state.options.indexOf(option) > -1){
            return "This Option Already Exists"
        }

        this.setState((prevState) => (
            {options: prevState.options.concat([option])}
        ));
       
        console.log("Indecision App component ");
        console.log(this.state.options);
    }
}



const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>);
}

Header.defaultProps = {
    title: "Indecision"
}




const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick} 
                disabled={!props.hasOption}>
                What should I do?
            </button>
        </div>
    );
}


const Options = (props) => {
    return(
        <div>
            <button onClick={props.deleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>PLEASE ADD AN OPTION</p>}
            {
                props.options.map((val) => 
                    <Option 
                        key={val} 
                        optionsText={val}
                        deleteOption={props.deleteOption}/>)
            }
        </div>
    );
}


const Option = (props) => {
    return (
        <div>
            {props.optionsText}
            <button 
                onClick={()=>{
                    props.deleteOption(props.optionsText);
                }}>
                Remove
            </button>
        </div>
    );
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

        this.setState(() => ({error:error}));


        e.target.elements.option.value = '';
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
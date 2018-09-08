let options = ["a","b"];

const onFormSubmit = (e)=>{
    e.preventDefault();//stop refreshing of page
    let input = e.target.elements.option.value;
    console.log(input);

    options.push(input);
    e.target.elements.option.value = '';

}

class IndecisionApp extends React.Component{
    render(){
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer";
        const options = ['option 1', 'option 2', 'option 3'];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options />
                <AddOption />
            </div>
        );
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
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    render(){
        return(
            <div>
                <Option />
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
                 {options.map((val, index) => <li key={index}>Option: {val}</li>)}
            </div>
        );
    }
}

class AddOption extends React.Component{
    render(){
        return (
            <div>
                <form onSubmit={onFormSubmit}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
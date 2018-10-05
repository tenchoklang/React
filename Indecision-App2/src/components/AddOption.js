import React from 'react';



export default class AddOption extends React.Component{

    state = {
        error: undefined
    }

    render(){
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.addOption}>
                    <input className="add-option__input" type="text" name="option"></input>
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }

    addOption = (e) =>{
        e.preventDefault();
        const input = e.target.elements.option.value.trim();
        let error = this.props.addOption(input);

        this.setState(() => ({error:error}));


        e.target.elements.option.value = '';
    }
}
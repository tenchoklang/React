import React from 'react';

import AddOption from './AddOption'
import Action from './Action'
import Header from './Header'
import Options from './Options'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component{

    state = {
        options: [],
        selectedOption: undefined
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
                <OptionModal selectedOption={this.state.selectedOption} clearSelectedOption={this.clearSelectedOption}/>    
            </div>
        );
    }

    clearSelectedOption = () =>{
        this.setState(() => ({selectedOption:undefined}))
    }

    deleteOptions = () => {
        this.setState(() => ({options:[]}));
    }

    deleteOption = (optionToRemove) => {
        const index = this.state.options.indexOf(optionToRemove);
        console.log("DELETE OPTION " + optionToRemove + " " + index);
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option!==optionToRemove)
        }));

    }


    handlePick = () => {
        const random = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[random];
        this.setState(() => ({selectedOption: option}));
    }

    addOption = (option) =>{
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


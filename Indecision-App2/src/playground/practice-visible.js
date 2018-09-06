console.log("test");

let text;
let buttonText = "Show detail";
const appRoot = document.getElementById("app");


const toggleText = () => {
    if(!text){
        text = "Hey. You can see me now"
        buttonText = "Hide Details";
    }else{
        text = "";
        buttonText = "Show Detail"
    }
    reRender();
}



const reRender = () =>{
    const template = (
        <div>
            <h1>Visible Toggle</h1>
            <button onClick={toggleText}>{buttonText}</button>
            <p>{text}</p>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

reRender();



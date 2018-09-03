console.log("app is running");
const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: ['one', 'two']
}

const template = 
    <div>
        <h1>Header</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are Your Options "+app.options.toString() : "No Options"}</p>
    </div>;
const appRoot = document.getElementById("app");



var user = {
    name: "tenzin",
    age: 18,
    location: "New York"
};

function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }
}
var templateTwo = 
    <div>   
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {user.age >=18 && <p>age: {user.age}</p>}
        {getLocation(user.location)}
    </div>

ReactDOM.render(template, appRoot);
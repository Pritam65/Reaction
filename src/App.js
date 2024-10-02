import './App.css';
import {User} from "./User";
import {Planet} from "./Planet";

function App() {
    const users = [
        {name: "Pritam", age: 25, gender: "Male"},
        {name: "Rahul", age: 22, gender: "Male"},
        {name: "Arjun", age: 19, gender: "Female"},
    ]

    const planets = [
        {name: "Earth", isGasPlanet: false},
        {name: "Mars", isGasPlanet: false},
        {name: "Jupiter", isGasPlanet: true},
        {name: "Saturn", isGasPlanet: true},
        {name: "Uranus", isGasPlanet: false},
        {name: "Neptune", isGasPlanet: true},
    ]

    return (
        <div className="App">
            <div>
                {users.map((user, index) => {
                return (
                    <User
                        key={index}
                        name={user.name}
                        age={user.age}
                        gender={user.gender === "Male" ?
                            <span style={{color: "green"}}>Male</span> :
                            <span style={{color:'red'}}>Female</span>}
                    />
                )}
            )}
            </div>
            <div>
                {planets.map((planet,index) => {
                    return (
                        <Planet
                        key={index}
                        name={planet.isGasPlanet === true ?
                        <span>{planet.name}</span> : <p>{planet.name} is Not a Gas Planet</p>}
                        />
                    )
                })}
            </div>
        </div>
    )
};

export default App;

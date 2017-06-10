class Person extends React.Component {
    render() {
        const name = this.props.name;
        const over21 = this.props.age >= 21;
        const hobbies = this.props.hobbies.map(e => {
            return <li>{e}</li>
        });
        return (
            <div>
                <p>Learn some information about this person</p>
                {name.length > 8 ?
                    <h3>{name.slice(0, 6)}</h3> :
                    <h3>{name}</h3>
                }
                <p>is {this.props.age}... &nbsp;
                {over21 ?
                        <span>have a drink!</span> :
                        <span>you must be 21.</span>
                    }
                </p>
                <p>Hobbies</p>
                <ul>{hobbies}</ul>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Person name="Elizabeth" age="60" hobbies={["running", "eating"]} />
                <Person name="Bob" age="15" hobbies={["sleeping", "burping"]} />
                <Person name="Lauren" age="21" hobbies={["going to the beach", "shopping", "taking instagram photos"]} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
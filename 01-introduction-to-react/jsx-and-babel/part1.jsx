class FirstComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>My very first component!</h1>
            </div>
        );
    }
}

class SecondComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>My second component!</h2>
            </div>
        );
    }
}

class NamedComponent extends React.Component {
    render() {
        return (
            <div>
                <p>My name is {this.props.name}</p>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <FirstComponent />
                <SecondComponent />
                <NamedComponent name="V-Lai" />
            </div>
        );
    }
}

class Tweet extends React.Component {
    render() {
        return (
            <div className={this.props.color}>
                <p>Date: {this.props.date}</p>
                <p>Tweeter: {this.props.username} &nbsp; {this.props.name}</p>
                <p>Message: {this.props.message}</p>
            </div>
        );
    }
}

class App1 extends React.Component {
    render() {
        return (
            <div>
                <h1>Tweets</h1>
                <Tweet color="red" username="@dog" name="Dog" date="6-6-17" message="Tweeting again!"/>
                <Tweet color="blue" username="@cat" name="Cat" date="7-12-16" message="Warble warble warble"/>
                <Tweet color="green" username="@me" name="Me" date="9-30-14" message="Hello World!"/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
ReactDOM.render(<App1 />, document.getElementById("app1"));
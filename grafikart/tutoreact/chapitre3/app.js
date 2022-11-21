function WelcomeFunc({name, children}) {
    return <div>
            <h1>Bonjour {name}</h1>
            <p>
                {children}
            </p>
        </div>    
}

class Welcome extends React.Component {

    render () {
        return <div>
            <h1>Bonjour {this.props.name}</h1>
            <p>
                {this.props.children}
            </p>
        </div>    
    }
}

class Clock extends React.Component {

    constructor (props) {
        super(props)
        this.state = {date: new Date()}
        this.timer = null
    }

    componentDidMount () {
        this.timer = window.setInterval(this.tick.bind(this), 1000)
    }

    componentWillUnmount () {
        window.clearInterval(this.timer)
    }

    tick () {
        this.setState({date: new Date()})
    }

    render () {
        return <div>
            It's {this.state.date.toLocaleDateString()} at {this.state.date.toLocaleTimeString()}
        </div>    
    }
}

class Incrementer extends React.Component {

    constructor (props) {
        super(props)
        this.state = {n: props.start, timer: null}
        this.toggle = this.toggle.bind(this)
        this.reset = this.reset.bind(this)
    }

    componentDidMount () {
        this.play()
    }

    componentWillUnmount () {
        window.clearInterval(this.state.timer)
    }

    increment () {
        this.setState((state, props) => ({n: this.state.n + props.step}))
    }

    pause () {
        window.clearInterval(this.state.timer)
        this.setState({
            timer: null
        })
    }

    play () {
        window.clearInterval(this.state.timer)
        this.setState({
            timer: window.setInterval(this.increment.bind(this), 1000)
        })
    }

    toggle () {
        return this.state.timer ? this.pause() : this.play()
    }

    label () {
        return this.state.timer ? 'Pause' : 'Play'
    }

    reset () {
        this.pause()
        this.play()
        this.setState((state, props) => ({n:props.start}))
    }

    render () {
        return <div>
            Valeur: {this.state.n}
            <button onClick={this.toggle}>{this.label()}</button>
            <button onClick={this.reset}>Reset</button>
        </div>    
    }
}

Incrementer.defaultProps = {
    start: 0,    
    step: 1
}

class ManualIncrementer extends React.Component {

    constructor (props) {
        super(props)
        this.state = {n: 0}
    }

    increment (e) {
        this.setState((state, props) => ({n: this.state.n + props.step}))
    }

    render () {
        return <div>Valeur: {this.state.n} <button onClick={this.increment.bind(this)}>Incrémenter</button></div>    
    }
}

ManualIncrementer.defaultProps = {
    step: 1
}

function Home () {
    return  <div>
        <Welcome name="Jean" />
        <Welcome name="Pierre" />
        <Clock/>
        <Incrementer start={10} step={10}/>
        <Incrementer start={100} step={1}/>
        <ManualIncrementer/>
    </div>
}

////ReactDOM.render(<Welcome name="Jean">Bonjour tous</Welcome>, document.querySelector('#app'))
ReactDOM.render(<Home/>, document.querySelector('#app'))
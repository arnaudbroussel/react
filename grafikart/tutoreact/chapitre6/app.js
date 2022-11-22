class HomeV1 extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            nom: ["demo1", "demo2"],
            checked: true
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this)
    }

    handleChange (e) {
        this.setState({
            nom: Array.from(e.target.selectedOptions).map(o => o.value)
        })
    }

    handleChangeCheckbox (e) {
        this.setState({
            checked: e.target.checked
        })
    }

    render () {
        return <div>
            {JSON.stringify(this.state.nom)}
            <label htmlFor="nom">Mon nom:</label>
            <select value={this.state.nom} onChange={this.handleChange} multiple>
                <option value="demo1">Demo 1</option>
                <option value="demo2">Demo 2</option>
                <option value="demo3">Demo 3</option>
            </select>
            <input type="checkbox" checked={this.state.checked} onChange={this.handleChangeCheckbox}/>
            {this.state.checked ? <div>Checked</div>: null}
        </div>    
    }
}

class Field extends React.Component {
    render () {
        const {name, value, onChange, children} = this.props
        return <div className="form-group">
            <label htmlFor={name}>{children}</label>
            <input type="text" value={value} onChange={onChange} id={name} name={name} className="form-control"/>
        </div>
    }
}

// this is another way to create a component using a function and not a class
function Checkbox({name, value, onChange, children}) {
    return <div className="form-check">
        <input type="checkbox" checked={value} onChange={onChange} id={name} name={name} className="form-check-input"/>
        <label htmlFor={name} className="form-check-label">{children}</label>
    </div>
}

class Home extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            nom: '',
            prenom: '',
            newsletter: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (e) {
        const name = e.target.name
        const type = e.target.type
        const value = type === 'checkbox' ? e.target.checked : e.target.value
        this.setState({
            [name]: value
        })
    }

    handleSubmit (e) {
        e.preventDefault()
        const data = JSON.stringify(this.state)
        console.log(data)
        this.setState({
            nom: '',
            prenom: '',
            newsletter: false            
        })
    }

    render () {
        console.log('render')
        return <form className="container" onSubmit={this.handleSubmit}>
            <Field name="nom" value={this.state.nom} onChange={this.handleChange}>Nom</Field>
            <Field name="prenom" value={this.state.prenom} onChange={this.handleChange}>Prénom</Field>
            <Checkbox name="newsletter" value={this.state.newsletter} onChange={this.handleChange}>Newsletter</Checkbox>
            <div>
                <label htmlFor="nom">Nom</label>
                <input type="text" value={this.state.nom} onChange={this.handleChange} id="nom" name="nom"/>
            </div>
            <div>
                <label htmlFor="prenom">Prenom</label>
                <input type="text" value={this.state.prenom} onChange={this.handleChange} id="prenom" name="prenom"/>
            </div>
            <div>
                <label htmlFor="prenom">Subscribe to the newsletter ?</label>
                <input type="checkbox" checked={this.state.newsletter} onChange={this.handleChange} id="newsletter" name="newsletter"/>
            </div>
            <div className="form-group">
                <button className="btn btn-primary">Send</button>
            </div>
            {JSON.stringify(this.state)}
        </form>    
    }
}


ReactDOM.render(<Home/>, document.querySelector('#app'))
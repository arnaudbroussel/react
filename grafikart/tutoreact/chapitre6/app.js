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

class Home extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            nom: '',
            prenom: '',
            newsletter: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (e) {
        const name = e.target.name
        const type = e.target.type
        const value = type === 'checkbox' ? e.target.checked : e.target.value
        this.setState({
            [name]: value
        })
    }

    render () {
        console.log('render')
        return <div className="container">
            <Field name="myname" value={this.state.nom} onChange={this.handleChange}>Nom</Field>
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
            {JSON.stringify(this.state)}
        </div>    
    }
}


ReactDOM.render(<Home/>, document.querySelector('#app'))
class Home extends React.Component {

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

ReactDOM.render(<Home/>, document.querySelector('#app'))
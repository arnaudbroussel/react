const Field = React.forwardRef(function (props, ref) {
    return <div className="form-group">
        <input type="text" className="form-control" ref={ref}/>
    </div>
})

class FieldAsClass extends React.Component {
    render () {
        return <div className="form-group">
            {this.props.label}
            <input type="text" className="form-control" ref={this.props.forwardRef}/>
        </div>
    }
}

const FieldAsClassWithRef  = React.forwardRef((props, ref) => {
    return <FieldAsClass forwardRef={ref} {...props}/>
}) 

class Home extends React.Component {

    constructor (props) {
        super(props)
        this.handleClickRef = this.handleClickRef.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleClickField = this.handleClickField.bind(this)
        this.handleClickFieldClass = this.handleClickFieldClass.bind(this)
        this.inputRef = null
        this.input = React.createRef()
        this.inputField = React.createRef()
        this.inputFieldClass = React.createRef()
    }

    handleClickRef(e) {
        console.log(this.inputRef.value)
    }

    handleClickField(e) {
        console.log(this.inputField.current.value)
    }

    handleClickFieldClass(e) {
        console.log(this.inputFieldClass.current.value)
    }

    handleClick(e) {
        // this is useful but not orientated to react because we are manipulatind the DOM.
        // this can collide with some manipulations done by React.
        // so why do we need to use this ?
        //      1) when have have fields not controlled by React and we want to get / update their value
        //      2) when we plug components external to React like for example a library that provides a DatePicker - in that case we use the "ComponentDidMount" / "ComponentUnmount"
        //              --> to comunicate with components not React in React
        console.log(this.input.current.value)
    }

    render () {
        return <div>
            <div>
                <input type="text" ref={(ref) => this.inputRef = ref}/>
                <button onClick={this.handleClickRef}>Test with Ref</button>
            </div>
            <div>
                <input type="text" ref={this.input}/>
                <button onClick={this.handleClick}>Test</button>
            </div>
            <div>
                <Field ref={this.inputField}/>
                <button onClick={this.handleClickField}>Test</button>
            </div>
            <div>
                <FieldAsClassWithRef ref={this.inputFieldClass} label="my label as a props"/>
                <button onClick={this.handleClickFieldClass}>Test</button>
            </div>
        </div>
    }
}

ReactDOM.render(<Home/>, document.getElementById('app'))
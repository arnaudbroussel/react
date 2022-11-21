let n = 1

function numberFormat(n){
    return n.toString().padStart(2,'0')
}

function render() {
    const items = [
        'Task #1',
        'Task #2',
        'Task #3'
    ]

    const lis = items.map((item, k) => <li key={k}>{item}</li>)

    const title = 
    <div>
        <h1>
            Bonjour tout le monde <span>{n % 2 ? numberFormat(n) : numberFormat(n-1)}</span>
        </h1>
        <ul>
            {lis}
        </ul>
    </div>

    ReactDOM.render(title, document.querySelector('#app'))
}

render()

window.setInterval(() => {
    n++
    render()
}, 1000)

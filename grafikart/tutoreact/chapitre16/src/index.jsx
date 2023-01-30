import React, {useState, useEffect} from 'react'
import {render} from 'react-dom'

function useIncrement(initial, step) {
    const [count, setCount] = useState(initial)
    const increment = () => {
        setCount(c => c + step)
    }
    return [count, increment];
}

function Compteur () {
    const step = 1
    const [count, increment] = useIncrement(0, step)
    
    // useEffect to create effects associated to the state changes

    // this hook is used to initialize the timer
    useEffect(() => {
        const timer = window.setInterval(() => {
            increment()
        }, 1000)

        return function() {
            clearInterval(timer)
        }
    }, [])
    // [] no value is 'observed', so this is like a ComponentDidMount

    // NOTE: use several hooks when the logic is different
    // next one is to avoid side effect for the title
    useEffect(() => {
        document.title = "Counter " + count
    }, [count])
    // [count] = this array is the list of the values to 'observe' and used to trigger the useEffect when it occurs

    return <button onClick={increment}>Increase {count}</button>
}

render(
    <div>
        <Compteur/>
    </div>,
    document.getElementById('app')
)
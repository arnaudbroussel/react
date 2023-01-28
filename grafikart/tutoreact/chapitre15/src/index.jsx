import React, {useState} from 'react'
import {render} from 'react-dom'

function Compteur1 () {
    const [counter, setCounter] = useState(0)
    const handleClick = function (e) {
        e.preventDefault()
        setCounter(10)
    }
    
    return <button onClick={handleClick}>Counter: {counter}</button>
}

function Compteur2 () {
    const [state, setState] = useState({})
    const handleClick = function (e) {
        e.preventDefault()
        setState({
            count: 10
        })
    }

    return <div onClick={handleClick}>{JSON.stringify(state)}</div>
}

function Compteur3 () {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    
    const handleClick = function (e) {
        e.preventDefault()
        setCount(c => c + 1)
    }
    
    const handleClick2 = function (e) {
        e.preventDefault()
        setCount2(c => c + 2)
    }
    
    return <>
        <button onClick={handleClick}>Increase +1 {count}</button>
        <button onClick={handleClick2}>Increase +2 {count2}</button>
    </>
}

function useIncrement(initial, step) {
    const [count, setCount] = useState(initial)
    const increment = () => {
        setCount(c => c + step)
    }
    return [count, increment];
}

function Compteur4 () {
    const step = 2
    const [count, increment] = useIncrement(3, step)
    
    return <button onClick={increment}>Increase +{step} {count}</button>
}

render(
    <div>
        <div>
            <Compteur1 />
            <Compteur1 />
        </div>
        <div>
            <Compteur2 />
            <Compteur2 />
        </div>
        <div>
            <Compteur3 />
        </div>
        <div>
            <Compteur4 />
        </div>
    </div>,
    document.getElementById('app')
)
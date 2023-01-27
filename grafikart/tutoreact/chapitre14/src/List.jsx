import React, {useState, useCallback} from "react";

export function List() {
    const [items, setItems] = useState([1,2,3])

    const handleClick = useCallback(() => {
        setItems(items => [...items, items.length + 3])
    })

    return <>
        <ul>
            {items.map(i => <li key={i}>Item {i}</li>)}
        </ul>
        <button onClick={handleClick}>Add an element</button>
    </>
}
import React, {useState} from 'react'

function Hooks() {

    const [count, setCount] = useState(0)
    const [fruit, setFruit] = useState('banana');


    return (
        <div>
            <p>You've clicked the click button {count} times, niceeeeeee</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <button onClick={() => setCount(count + 5)}>
                Fiver
            </button>
            <button onClick={() => setCount(count - 1)}>
                Decounter
            </button>
            <div>
                <h2>Fruits: {fruit}</h2>
                <button onClick={() => setFruit('orange')}>
                Orange
                </button>
                <button onClick={() => setFruit('watermelon')}>
                Watermelon
                </button>
                <button onClick={() => setFruit('banana')}>
                Banana
                </button>
            </div>
        </div>
    )
}

export default Hooks;

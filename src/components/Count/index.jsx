import React, { useState , useEffect} from 'react'
import BoxStyle from './style'

export default function Count({background}) {
    const [count, setCount] = useState(0);

    const changeColor = () => {
        console.log('scroll', background);
    }

    useEffect(() => {
        console.log('useEffect');
        window.addEventListener('scroll',changeColor)

        return () => {
            console.log('destroy useEffect');
            window.removeEventListener('scroll',changeColor);
        }
    },[background])

    const Decrease = (e) => {
        setCount(preState => preState - 1);
        setCount(preState => preState - 1);
    }

    const Increase = (e) => {
        setCount(count + 1)
    }

    console.log('re-render');

    return (
        <BoxStyle background = {background} >
            <button onClick={Decrease}>-</button>
            {count}
            <button onClick={Increase}>+</button>
        </BoxStyle>
    )
}

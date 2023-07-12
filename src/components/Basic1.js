import React, { useState } from 'react'

const Basic1 = (props) => {
    // const clickHandler = () => {
    //     console.log('clicked')
    // }

    // const [count, setCount] = useState(0)
    const [product, setProducts] = useState({name: '', price: ''})

    return (
        <>
            {/* <button onClick={() => {setCount(prevCount=>prevCount+1); setCount(prevCount=>prevCount+1);}}>Click {count}</button> */}
            {/* <div>Hello { props.name }</div> */}
            {/* <div>Hello React2</div> */}
            <form>
                <input type="text" value={product.name}
                onChange={evt => setProducts({...product, name: evt.target.value})}/>

                <input type="text" value={product.price}
                onChange={evt => setProducts({...product, price: evt.target.value})}/>

            </form>
            <h1>Product name is {product.name}</h1>
            <h1>Product name is {product.price}</h1>

        </>
    )
}

export default Basic1
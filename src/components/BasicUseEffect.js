import React, { useEffect, useState } from 'react'

const BasicUseEffect = () => {

    const [count, setCount] = useState(0)
    const [item, setItem] = useState('')

    useEffect(() => {
        console.log("useEffect invoked")
    },[count])



    return (
        <div>
            <button onClick={()=> setCount(prevCount=>prevCount+1)}>Click {count}</button>
            <input type="text" value={item} onChange={evt=>setItem(evt.target.value)} />
        </div>
    )
}

export default BasicUseEffect
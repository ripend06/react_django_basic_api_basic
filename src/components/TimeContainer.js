import React, { useState } from 'react'
import Timer from './Timer'

const TimeContainer = () => {

    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick={()=>setDisplay(!display)}>Swith Timer</button>
            { display && <Timer /> }
        </div>
    )
}

export default TimeContainer
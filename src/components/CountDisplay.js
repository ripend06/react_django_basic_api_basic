import React from 'react'

const CountDisplay = ({name, count}) => {
    console.log(`display ${name}`)
    return (
        <div>
            {count}
        </div>
    )
}

export default React.memo(CountDisplay)
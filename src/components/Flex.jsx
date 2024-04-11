import { useState } from 'react'
import './Flex.css'

function Flex() {

    const [data, setData] = useState( [1,2,3,4,5,6,7,8,9,0] )

    const mappedData = data.map( d => <div key={d} className="flex-item"></div> )

    return (
        <>

            <h2>Flex</h2>

            <div className="flex-container styled-container">

                { mappedData }

            </div>

        </>
    )

}

export default Flex
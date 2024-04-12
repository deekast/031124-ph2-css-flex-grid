import { useState } from 'react'
import './Grid.css'

function GridColumns() {

    const [data, setData] = useState( [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9] )

    const mappedData = data.map( d => <div key={d} className="flex-item"></div> )

    return (
        <>


            {/* GRID COLUMNS */}
            <h2>Grid Columns</h2>

            <div className="grid-columns styled-container">

                { mappedData }

            </div>


            {/* GRID LAYOUT */}
            <h2>Grid Layout</h2>

            <div className="grid-layout styled-container">

                <div id="header">HEADER</div>
                <div id="sidebar">SIDEBAR</div>
                <div id="main">MAIN</div>
                <div id="footer">FOOTER</div>

            </div>

        </>
    )

}

export default GridColumns
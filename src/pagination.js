import React from 'react'
import "./dashboard/dashboard.css";

class Pagination extends React.Component {




    render() {
        return (
            <div className="d-flex justify-content-between" style={{
                marginTop: '1em'
            }} >
                <button className="btn btn-primary" id="submit"
                    style={{
                        marginRight: '70em',
                        width: '6em',
                        height: '2em',
                        backgroundColor: 'blue',
                        fontWeight: 'bold'
                    }}
                > Previous</button>
                <button className="btn btn-primary" id="submit"
                    style={{
                        width: '6em',
                        height: '2em',
                        backgroundColor: 'blue',
                        fontWeight: 'bold'
                    }}> Next</button >

            </div>
            // <div>
            //     <button id="submit"> Previous</button>

            //     <button id="submit"> Next</button >

            // </div>


        )
    }
}
export default Pagination;

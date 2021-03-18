import React, { useState, useEffect } from "react";


const Pagination = ({ showPerPage, onPaginationChange, total }) => {
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        const value = showPerPage * counter;
        onPaginationChange(value - showPerPage, value);
    }, [counter]);

    const onButtonClick = (type) => {
        if (type === "prev") {
            if (counter === 1) {
                setCounter(1);
            } else {
                setCounter(counter - 1);
            }
        } else if (type === "next") {
            if (Math.ceil(total / showPerPage) === counter) {
                setCounter(counter);
            } else {
                setCounter(counter + 1);
            }
        }
    };
    return (
        <div className="d-flex justify-content-between" style={{
            marginTop: '1em'
        }}>
            <button className="btn btn-primary"
                style={{
                    marginRight: '70em',
                    width: '6em',
                    height: '2em',
                    backgroundColor: 'blue',
                    fontWeight: 'bold'
                }}
                onClick={() => onButtonClick("prev")}>
                Previous
      </button>
            <button className="btn btn-primary"
                style={{
                    width: '6em',
                    height: '2em',
                    backgroundColor: 'blue',
                    fontWeight: 'bold'
                }}
                onClick={() => onButtonClick("next")}>
                Next
      </button>
        </div>
    );
};

export default Pagination;
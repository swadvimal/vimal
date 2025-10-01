import React from 'react'

function ButtonCom(props) {
    return (
        <>
            <button className="rounded-pill px-4 py-2 fw-bold mt-2 text-white" style={{ background: "var(--red)", border: "2px solid var(--ofwhite)" }}>{props.btn}</button>
        </>
    )
}

export default ButtonCom
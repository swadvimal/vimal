import React from 'react'
import { Link } from 'react-router-dom'
import ButtonCom from './ButtonCom'

function Page404() {
    return (
        <>
            <div className="error-container">
                <div className="error-content">
                    <h1 className="error-code text-dark">404</h1>
                    <p className="error-text text-dark">Page Not Found</p>
                    <Link to="/" className="home-link">
                        <ButtonCom btn={"Back To Home"} />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Page404
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const Errorpage = () => {
    return (
        <Fragment>
            <h1>
                You entered wrong url
            </h1>
            <p>if you came here from a link probably the link has expired click the button below to return to homepage.</p>
            <Link to={"/"}>Homepage</ Link>
        </Fragment>
    )
}

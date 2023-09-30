import React, { Fragment } from 'react'
import './Mainpage.css'

export const Mainpage = () => {
    return (
        <Fragment>
            <main className="main-content">
                <h1 className="title">Welcome to My Website</h1>
                <p className="paragraph">
                    This is the main content of your page. You can add more components and content here.
                </p>
            </main>
        </Fragment>
    )
}

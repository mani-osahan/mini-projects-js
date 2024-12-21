import React from 'react'
import Styles from './navbar.module.css'
export default function Navbar() {

    const navOptions : any= {
        "bin2dec": "Binary to Decimal",
        "proj2" : "Project 2"
    }

    return (
        <div className={Styles.container}>
            {Object.keys(navOptions).map((key : any) => {
                return (
                    <a href={`/${key}`}>{navOptions[key]}</a>
                )
            })}
        </div>
    )
}
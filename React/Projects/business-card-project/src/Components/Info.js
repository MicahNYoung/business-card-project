import React from "react"
import pictureOfMe from "../images/pictureOfMe.jpg"

export function Info(){
    return (
        <div className="info">
            <img src={pictureOfMe} width="250px"/>
            <h1>Micah Young</h1>
            <h3>Fullstack Developer</h3>
            <h4>https://github.com/MicahNYoung</h4>
            <nav>
                <form action="https://www.linkedin.com/in/micah-young-4515b818b/">
                    <input type="submit" value="LinkedIn" />
                </form>
            </nav>
        </div>
    )
}
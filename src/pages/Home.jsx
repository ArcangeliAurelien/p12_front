import React from "react"
import Header from "../components/Header"
import AsideNav from "../components/AsideNav"
import "../styles/App.css"
import Welcome from "../components/Welcome"

function Home() {
    return (
        <div>
            <Header />
            <div className="section">
                <AsideNav />
                <Welcome />
            </div>
        </div>
    )
}

export default Home
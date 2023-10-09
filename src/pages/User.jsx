import React from "react";
import Header from "../components/Header";
import AsideNav from "../components/AsideNav";
import UserPage from "../components/UserPage";
import "../styles/App.css"

function User() {
    return (
        <div>
            <Header />
            <div className="section">
                <AsideNav />
                <UserPage />
            </div>
        </div>
    )
}

export default User
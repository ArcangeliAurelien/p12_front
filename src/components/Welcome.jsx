import React from "react";
import { Link } from "react-router-dom";
import { users } from "../mock/UsersData";
import '../styles/App.css'

function Welcome() {
    return (
        <div className="blocText">
            <h1 className="welcome">
                Bienvenue
            </h1>

            <ul>
                {users.map(user => (
                    <Link to={`/user/${user.id}`} key={user.id}>
                        <li>User {user.id}</li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default Welcome
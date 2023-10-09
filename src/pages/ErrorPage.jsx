import React from "react"
import { Link } from "react-router-dom";
import Header from "../components/Header"
import AsideNav from "../components/AsideNav"
import "../styles/App.css"
import styled from "styled-components";

const Main = styled.main`
    max-width: 1240px;
    margin: auto;
    a{
        margin-top:1em;
        display:flex;
        flex-direction:column;
    }
`
const Title = styled.h1`
    margin: 1em 0em;
    font-size: 48px;
`

function ErrorPage() {
    return (
        <div>
            <Header />
            <div className="section">
                <AsideNav />
                <div>
                    <Main>
                        <Title>Page 404</Title>
                        <p>Oups ! La page que vous demandez n'existe pas.</p>
                        <Link to='/'>Retourner sur la page d’accueil</Link>
                    </Main>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage
import React from "react";
import meditation from '../assets/meditation.svg';
import cyclisme from '../assets/cyclisme.svg';
import natation from '../assets/natation.svg';
import musculation from '../assets/musculation.svg';
import "../styles/AsideNav.css"

function AsideNav() {
    return (
        <div className="MenuAside">
            <div className="blocLogo">
                <img src={meditation} alt="img-meditation" />
                <img src={cyclisme} alt="img-cyclisme" />
                <img src={natation} alt="img-natation" />
                <img src={musculation} alt="img-musculation" />
            </div>
            <div className="blocCopyryght">
                <div className="copyryght">Copiryght, SportSee 2020</div>
            </div>
        </div>
    )
}

export default AsideNav
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import calories from "../assets/calories.svg";
import glucides from "../assets/glucides.svg";
import lipides from "../assets/lipides.svg";
import proteines from "../assets/proteines.svg";
import '../styles/KeyData.css';
import getData from "../api/getData";
import PropTypes from "prop-types";

function KeyData() {
    const { id } = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        const userData = async () => {
            const request = await getData("users", id)
            if (!request) return console.log("error")
            setData(request.data)
        }
        userData()
    }, [id])
    if (data.length === 0) return null;

    const KeyDatas = data.keyData

    return (
        <div className="infos">
            <div className="keyData">
                <img src={calories} alt="calories" />
                <div>
                    <div className="data">{KeyDatas.calorieCount} kCal</div>
                    <div className="dataName">Calories</div>
                </div>
            </div>
            <div className="keyData">
                <img src={proteines} alt="calories" />
                <div>
                    <div className="data">{KeyDatas.proteinCount} g</div>
                    <div className="dataName">Proteines</div>
                </div>
            </div>
            <div className="keyData">
                <img src={glucides} alt="calories" />
                <div>
                    <div className="data">{KeyDatas.carbohydrateCount} g</div>
                    <div className="dataName">Glucides</div>
                </div>
            </div>
            <div className="keyData">
                <img src={lipides} alt="calories" />
                <div>
                    <div className="data">{KeyDatas.lipidCount} g</div>
                    <div className="dataName">Lipides</div>
                </div>
            </div>
        </div>
    )
}

KeyData.prototype = {
    KeyDatas: PropTypes.array.isRequired
}

export default KeyData
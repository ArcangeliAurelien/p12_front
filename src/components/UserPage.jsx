import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../styles/App.css';
import ActivitiesChart from "./chart/BarChart";
import AverageChart from "./chart/AreaChart";
import ScoreChart from "./chart/PieChart";
import RadarPerfChart from "./chart/RadarChart";
import KeyData from "./KeyData";
import getData from "../api/getData";
import PropTypes from "prop-types";

function UserPage() {
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

    const userName = data.userInfos.firstName

    return (
        <div className="blocText">
            <div>
                <h1 className="welcome">
                    Bonjour <span className="userName">{userName}</span>
                </h1>
                <div className="felicitation">
                    Félicitation ! Vous avez explosé vos objectifs hier 👏
                </div>
            </div>
            <div className="blocData">
                <div className="AllCharts">
                    <ActivitiesChart />
                    <div className="charts">
                        <AverageChart />
                        <RadarPerfChart />
                        <ScoreChart />
                    </div>
                </div>
                <KeyData />
            </div>
        </div>
    )
}

UserPage.prototype = {
    userName: PropTypes.object.isRequired
}

export default UserPage
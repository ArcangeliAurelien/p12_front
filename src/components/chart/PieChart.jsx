import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import getData from "../../api/getData";
import PropTypes from "prop-types";

const Container = styled.div`
    position: relative;
    max-width: 258px;
    width: 100%;
    background: #FBFBFB;
    border-radius: 5px;
`;

const Title = styled.h2`
    position: absolute;
    left: 20%;
    top: 15%;
    transform: translate(-50%, -50%);
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    color: #20253a;
    font-weight: 700;
`;

const Text = styled.p`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
    line-height: 20px;
    font-weight: 700;
    text-align: center;
    color: #74798c;
    border-radius: 50%;
    padding: 2.3rem 2.7rem;
`;

const Score = styled.span`
    color: rgba(0, 0, 0, 0.8);
    font-weight: 700;
    font-size: 26px;
`;

function ScoreChart() {
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

    const score = [
        { value: data.todayScore || data.score },
        { value: 1 - data.todayScore || data.score },
    ];

    return (
        <Container>
            <Title>Score</Title>
            <ResponsiveContainer width='100%' height='100%'>
                <PieChart width={130} height={155} >
                    <Pie data={score} dataKey="value" innerRadius={70} outerRadius={85} startAngle={90}  >
                        {score.map((entry, index) => (
                            index === 0
                                ? <Cell key={`cell-${index}`} cornerRadius={10} fill="#ff0000" />
                                : <Cell key={`cell-${index}`} fill="#ffffff" />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <Text>
                <Score>{score[0].value * 100}%<br /></Score>
                de votre<br /> objectif
            </Text>
        </Container>
    )
}

ScoreChart.propTypes = {
    score: PropTypes.number,
}

export default ScoreChart